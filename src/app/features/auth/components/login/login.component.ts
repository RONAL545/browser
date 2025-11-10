import { Component, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { environment } from '../../../../../environments/environment';

//particle
import { ParticlesService } from '../../services/particles.service';

// PrimeNG Imports
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly particlesService = inject(ParticlesService);

  loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  submitted = false;
  private resizeDebounce: any;
  adminWhatsappUrl = `https://wa.me/${environment.adminWhatsapp}`;

  constructor() {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, this.emailOrDniValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Validador personalizado: email O DNI de 8 dígitos
  private emailOrDniValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // El required ya maneja el campo vacío
    }

    const value = control.value.toString().trim();

    // Validar si es un email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);

    // Validar si es un DNI válido (exactamente 8 dígitos numéricos)
    const dniRegex = /^\d{8}$/;
    const isValidDni = dniRegex.test(value);

    // Si es email válido O DNI válido, no hay error
    if (isValidEmail || isValidDni) {
      return null;
    }

    // Si no es ninguno, retornar error
    return { emailOrDni: true };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    clearTimeout(this.resizeDebounce);
    this.resizeDebounce = setTimeout(() => {
      this.particlesService.destroyParticles('tsparticles-login-bg');
      this.initializeParticles();
    }, 250);
  }

  ngOnInit(): void {
    this.initializeParticles();
  }

  ngOnDestroy(): void {
    this.particlesService.destroyParticles('tsparticles-login-bg');
  }

 private async initializeParticles() {
    try {
      const isSmallScreen = window.innerWidth < 1200;

      await this.particlesService.initializeParticlesEngine();

      if (isSmallScreen) {
        // Móvil: centrado
        const position = { x: 50, y: 50 };
        const scale = 0.5;

        await this.particlesService.loadPolygonParticles(
          'tsparticles-login-bg',
          'assets/icons/unajlogo.svg',
          position,
          scale
        );
      } else {
        // Desktop: centrado en la columna derecha
        const position = { x: 50, y: 50 };
        const scale = 1.2; // Aumentado para un logo más grande

        await this.particlesService.loadPolygonParticles(
          'tsparticles-login-bg',
          'assets/icons/unajlogo.svg',
          position,
          scale
        );
      }

    } catch (error) {
      console.error('Error al inicializar partículas:', error);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('LOGIN RESPONSE:', response);
        console.log('USER:', response.user);
        console.log('ROLE:', response.user.role);
        console.log('ROLE TYPE:', typeof response.user.role);

        this.loading = false;
        // Obtener el rol del usuario (puede ser string o objeto)
        const userRole = typeof response.user.role === 'string'
          ? response.user.role
          : response.user.role?.nombre;

        console.log('USER ROLE EXTRACTED:', userRole);

        // Redirigir según el rol del usuario
        if (userRole === 'admin') {
          console.log('Redirigiendo a /app/admin');
          this.router.navigate(['/app/admin']);
        } else if (userRole === 'gestor-ubicaciones') {
          console.log('Redirigiendo a /app/admin/ubicacion');
          this.router.navigate(['/app/admin/ubicacion']);
        } else if (userRole === 'personal') {
          console.log('Redirigiendo a /app/personal/dashboard');
          this.router.navigate(['/app/personal/dashboard']);
        } else if (userRole === 'estudiante') {
          console.log('Redirigiendo a /app/estudiante/dashboard');
          this.router.navigate(['/app/estudiante/dashboard']);
        } else {
          console.log('Rol no reconocido, redirigiendo a /app');
          this.router.navigate(['/app']);
        }
      },
      error: (error) => {
        console.error('LOGIN ERROR:', error);
        this.loading = false;
        this.errorMessage = error.error?.message || 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
      }
    });
  }

  // Getters para validación en el template
  get identifier() {
    return this.loginForm.get('identifier');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
