import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export interface RoleGuardData {
  allowedRoles: string[];
}

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Obtener el rol del usuario del localStorage (la clave correcta es 'current_user')
  const userDataStr = localStorage.getItem('current_user');

  if (!userDataStr) {
    router.navigate(['/auth/login']);
    return false;
  }

  const userData = JSON.parse(userDataStr);
  const userRole = userData.role?.nombre || userData.role;

  // Obtener los roles permitidos de la configuración de la ruta
  const allowedRoles = route.data['allowedRoles'] as string[];

  if (!allowedRoles || allowedRoles.length === 0) {
    return true; // Si no hay restricciones, permitir acceso
  }

  // Verificar si el rol del usuario está en la lista de roles permitidos
  if (allowedRoles.includes(userRole)) {
    return true;
  }

  // Si no tiene permisos, redirigir a página de acceso denegado
  router.navigate(['/acceso-denegado']);
  return false;
};
