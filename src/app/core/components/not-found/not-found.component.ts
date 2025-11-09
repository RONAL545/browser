import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ParticlesService } from '../../../features/auth/services/particles.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private particlesService = inject(ParticlesService);

  isAuthenticated = false;
  userRole: string = '';

  async ngOnInit(): Promise<void> {
    // Verificar si el usuario está autenticado
    this.isAuthenticated = this.authService.isAuthenticated();

    if (this.isAuthenticated) {
      const currentUser = this.authService.getCurrentUser();
      this.userRole = typeof currentUser?.role === 'string'
        ? currentUser.role
        : currentUser?.role?.nombre || '';
    }

    // Inicializar particles
    await this.loadParticles();
  }

  ngOnDestroy(): void {
    this.particlesService.destroyParticles('particles-404');
  }

  private async loadParticles(): Promise<void> {
    try {
      await this.particlesService.initializeParticlesEngine();
      await this.particlesService.loadSimpleParticles('particles-404');
    } catch (error) {
      console.error('Error loading particles:', error);
    }
  }

  /**
   * Navega al inicio según el rol del usuario
   */
  goToHome(): void {
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return;
    }

    // Redirigir según el rol
    const roleRoutes: { [key: string]: string } = {
      'admin': '/app/admin/datos',
      'personal': '/app/personal/dashboard',
      'estudiante': '/app/estudiante/dashboard'
    };

    const route = roleRoutes[this.userRole.toLowerCase()] || '/auth/login';
    this.router.navigate([route]);
  }

  /**
   * Navega al dashboard del usuario autenticado
   */
  goToDashboard(): void {
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return;
    }

    const dashboardRoutes: { [key: string]: string } = {
      'admin': '/app/admin/datos',
      'personal': '/app/personal/dashboard',
      'estudiante': '/app/estudiante/dashboard'
    };

    const route = dashboardRoutes[this.userRole.toLowerCase()] || '/auth/login';
    this.router.navigate([route]);
  }

  /**
   * Navega al login
   */
  goToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
