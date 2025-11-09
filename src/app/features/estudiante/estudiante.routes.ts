import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { RegistrosComponent } from './registros/registros';

export const ESTUDIANTE_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'registros',
    component: RegistrosComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
 
