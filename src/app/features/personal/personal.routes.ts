import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const PERSONAL_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'registros',
    loadComponent: () => import('./registros/registros').then(m => m.RegistrosComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
