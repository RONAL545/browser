import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    PasswordModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  passwordForm: FormGroup;
  activeTab: 'personal' | 'password' = 'personal';
  passwordChangeSuccess = false;
  passwordChangeError = '';
  isChangingPassword = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    console.log('ProfileComponent ngOnInit called');
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const token = localStorage.getItem('access_token');

    // Cargar datos completos del usuario desde el backend usando el nuevo endpoint
    this.http.get<User>('http://localhost:3000/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (data) => {
        this.user = data;
        console.log('Perfil cargado exitosamente:', data);
      },
      error: (error) => {
        console.error('Error al cargar perfil:', error);
        // Intentar cargar desde localStorage como fallback
        const userStr = localStorage.getItem('current_user');
        if (userStr) {
          this.user = JSON.parse(userStr);
        }
      }
    });
  }

  passwordMatchValidator(g: FormGroup) {
    const newPass = g.get('newPassword')?.value;
    const confirmPass = g.get('confirmPassword')?.value;
    return newPass === confirmPass ? null : { mismatch: true };
  }

  onPasswordChange(): void {
    if (this.passwordForm.invalid) {
      Object.keys(this.passwordForm.controls).forEach(key => {
        this.passwordForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isChangingPassword = true;
    this.passwordChangeSuccess = false;
    this.passwordChangeError = '';

    const token = localStorage.getItem('access_token');
    const { currentPassword, newPassword } = this.passwordForm.value;

    // Determinar el endpoint según el rol del usuario
    let endpoint = '';
    const role = this.user?.role;
    const roleName = typeof role === 'string' ? role.toLowerCase() : role?.nombre?.toLowerCase();

    console.log('Rol del usuario:', typeof role === 'string' ? role : role?.nombre);
    console.log('Rol en minúsculas:', roleName);

    if (roleName === 'estudiante') {
      endpoint = 'http://localhost:3000/api/registros/estudiante/cambiar-password';
    } else if (roleName === 'personal') {
      endpoint = 'http://localhost:3000/api/registros/personal/cambiar-password';
    } else if (roleName === 'admin') {
      endpoint = `http://localhost:3000/api/users/${this.user?.id}/reset-password`;
    } else {
      this.passwordChangeError = `Rol de usuario no válido: "${roleName}". Roles permitidos: estudiante, personal, admin`;
      this.isChangingPassword = false;
      console.error('Rol no reconocido:', roleName, 'Usuario completo:', this.user);
      return;
    }

    this.http.patch(
      endpoint,
      {
        currentPassword,
        newPassword
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    ).subscribe({
      next: () => {
        this.passwordChangeSuccess = true;
        this.passwordChangeError = '';
        this.passwordForm.reset();
        this.isChangingPassword = false;

        setTimeout(() => {
          this.passwordChangeSuccess = false;
        }, 5000);
      },
      error: (error) => {
        this.isChangingPassword = false;
        this.passwordChangeError = error.error?.message || 'Error al cambiar la contraseña';

        setTimeout(() => {
          this.passwordChangeError = '';
        }, 5000);
      }
    });
  }

  getUserIdentifier(): string {
    return this.user?.identifier || 'N/A';
  }

  getUserFullName(): string {
    if (!this.user) return 'N/A';
    return `${this.user.nombres} ${this.user.apellidos}`.trim();
  }

  getRoleName(): string {
    const role = this.user?.role;
    if (typeof role === 'string') {
      return role;
    }
    return role?.nombre || 'N/A';
  }
}
