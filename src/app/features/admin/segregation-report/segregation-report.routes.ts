import { Routes } from '@angular/router';

export const SEGREGATION_REPORT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./segregation-report.component').then(
        (m) => m.SegregationReportComponent
      ),
  },
];
