import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export interface RoleGuardData {
  allowedRoles: string[];
}

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  console.log('ROLE GUARD - Verificando permisos para:', state.url);

  // Obtener el rol del usuario del localStorage (la clave correcta es 'current_user')
  const userDataStr = localStorage.getItem('current_user');
  console.log('ROLE GUARD - User data from localStorage:', userDataStr);

  if (!userDataStr) {
    console.log('ROLE GUARD - No se encontró usuario, redirigiendo a login');
    router.navigate(['/auth/login']);
    return false;
  }

  const userData = JSON.parse(userDataStr);
  const userRole = userData.role?.nombre || userData.role;
  console.log('ROLE GUARD - User role:', userRole);

  // Obtener los roles permitidos de la configuración de la ruta
  const allowedRoles = route.data['allowedRoles'] as string[];
  console.log('ROLE GUARD - Allowed roles:', allowedRoles);

  if (!allowedRoles || allowedRoles.length === 0) {
    console.log('ROLE GUARD - No hay restricciones, permitiendo acceso');
    return true; // Si no hay restricciones, permitir acceso
  }

  // Verificar si el rol del usuario está en la lista de roles permitidos
  if (allowedRoles.includes(userRole)) {
    console.log('ROLE GUARD - Usuario tiene permisos, permitiendo acceso');
    return true;
  }

  console.log('ROLE GUARD - Usuario no tiene permisos, redirigiendo a acceso denegado');
  // Si no tiene permisos, redirigir a página de acceso denegado
  router.navigate(['/acceso-denegado']);
  return false;
};
