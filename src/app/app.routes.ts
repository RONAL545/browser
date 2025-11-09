import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const routes: Routes = [
  // Ruta raíz - redirige al login
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },

  // Rutas de autenticación (públicas)
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(mod => mod.AUTH_ROUTES)
  },

  // Ruta de acceso denegado
  {
    path: 'acceso-denegado',
    loadComponent: () => import('./features/acceso-denegado/acceso-denegado.component').then(m => m.AccesoDenegadoComponent)
  },

  // Rutas protegidas con MainLayout (usado para admin, personal y estudiante)
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then(r => r.ADMIN_ROUTES)
      },
      {
        path: 'personal',
        loadChildren: () => import('./features/personal/personal.routes').then(r => r.PERSONAL_ROUTES)
      },
      {
        path: 'estudiante',
        loadChildren: () => import('./features/estudiante/estudiante.routes').then(r => r.ESTUDIANTE_ROUTES)
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.routes').then(r => r.PROFILE_ROUTES)
      },
      {
        path: '',
        loadComponent: () => import('./core/components/role-redirect.component').then(m => m.RoleRedirectComponent),
        pathMatch: 'full'
      }
    ]
  },

  // Rutas antiguas - redirigir a nuevas rutas
  {
    path: 'admin',
    redirectTo: '/app/admin',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },

  // 404 - Ruta no encontrada
  {
    path: '**',
    loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];