import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('AUTH GUARD - Verificando autenticación para:', state.url);
  console.log('AUTH GUARD - isAuthenticated:', authService.isAuthenticated());
  console.log('AUTH GUARD - Token:', authService.getToken());

  if (authService.isAuthenticated()) {
    console.log('AUTH GUARD - Usuario autenticado, permitiendo acceso');
    return true;
  }

  console.log('AUTH GUARD - Usuario no autenticado, redirigiendo a login');
  // Redirigir al login si no está autenticado
  router.navigate(['/auth/login'], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};
