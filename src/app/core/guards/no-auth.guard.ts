import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true;
  }

  // Si ya está autenticado, redirigir al dashboard según el rol
  const user = authService.getCurrentUser();
  if (user) {
    if (user.role === 'admin') {
      router.navigate(['/admin/dashboard']);
    } else if (user.role === 'personal') {
      router.navigate(['/personal/dashboard']);
    } else if (user.role === 'estudiante') {
      router.navigate(['/estudiante/dashboard']);
    }
  }

  return false;
};
