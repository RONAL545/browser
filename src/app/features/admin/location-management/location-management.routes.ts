import { Routes } from '@angular/router';

export const LOCATION_MANAGEMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/location-page/location-page.component').then(c => c.LocationPageComponent)
  }
];
