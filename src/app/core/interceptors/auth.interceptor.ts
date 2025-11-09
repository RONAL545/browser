import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';

// Variable para evitar múltiples intentos de refresh simultáneos
let isRefreshing = false;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  // Clonar la petición agregando el token y withCredentials para cookies
  let clonedRequest = req.clone({
    withCredentials: true, // Siempre incluir cookies (necesario para refresh token)
    setHeaders: token ? {
      Authorization: `Bearer ${token}`
    } : {}
  });

  // Procesar la petición y manejar errores 401
  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      // Si es error 401 y NO es una petición de login o refresh
      if (
        error.status === 401 &&
        !req.url.includes('/auth/login') &&
        !req.url.includes('/auth/refresh')
      ) {
        // Intentar refrescar el token
        if (!isRefreshing) {
          isRefreshing = true;

          return authService.refreshToken().pipe(
            switchMap(() => {
              isRefreshing = false;

              // Reintentar la petición original con el nuevo token
              const newToken = authService.getToken();
              const retriedRequest = req.clone({
                withCredentials: true,
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              });

              return next(retriedRequest);
            }),
            catchError((refreshError) => {
              isRefreshing = false;

              // Si el refresh falla, redirigir al login
              authService.logout();
              router.navigate(['/auth/login']);

              return throwError(() => refreshError);
            })
          );
        } else {
          // Si ya se está refrescando, redirigir al login
          router.navigate(['/auth/login']);
          return throwError(() => error);
        }
      }

      return throwError(() => error);
    })
  );
};
