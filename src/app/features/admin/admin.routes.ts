import { Routes } from '@angular/router';
import { roleGuard } from '../../core/guards/role.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'datos',
    canActivate: [roleGuard],
    data: { allowedRoles: ['admin'] },
    loadChildren: () => import('./data-report/data-report.routes').then(r => r.DATA_REPORT_ROUTES)
  },
  {
    path: 'segregacion',
    canActivate: [roleGuard],
    data: { allowedRoles: ['admin'] },
    loadChildren: () => import('./segregation-report/segregation-report.routes').then(r => r.SEGREGATION_REPORT_ROUTES)
  },
  {
    path: 'usuarios',
    canActivate: [roleGuard],
    data: { allowedRoles: ['admin'] },
    loadChildren: () => import('./user-management/user-management.routes').then(r => r.USER_MANAGEMENT_ROUTES)
  },
  {
    path: 'ubicacion',
    canActivate: [roleGuard],
    data: { allowedRoles: ['admin', 'gestor-ubicaciones'] },
    loadChildren: () => import('./location-management/location-management.routes').then(r => r.LOCATION_MANAGEMENT_ROUTES)
  },
  {
    path: '',
    redirectTo: 'ubicacion',
    pathMatch: 'full'
  }
];
