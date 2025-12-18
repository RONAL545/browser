import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { UserForm } from '../user-form/user-form';
import { AppButtonComponent } from '../../../../../shared/components/app-button/app-button';
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar';

@Component({
  selector: 'app-user-management-page',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonModule, TableModule, TooltipModule, UserForm, AppButtonComponent, FilterBarComponent],
  templateUrl: './user-management-page.html',
  styleUrl: './user-management-page.scss',
  providers: [MessageService]
})
export class UserManagementPage implements OnInit {
  users: User[] = [];
  loading = false;
  showUserForm = false;
  selectedUser: User | null = null;

  page = 1;
  limit = 10;
  totalRecords = 0;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers(this.page, this.limit).subscribe({
      next: (response) => {
        this.users = response.users;
        this.totalRecords = response.total;
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al cargar usuarios'
        });
        this.loading = false;
      }
    });
  }

  onNewUser() {
    this.selectedUser = null;
    this.showUserForm = true;
  }

  onEditUser(user: User) {
    this.selectedUser = user;
    this.showUserForm = true;
  }

  onDeleteUser(userId: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Usuario eliminado correctamente'
          });
          this.loadUsers();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al eliminar usuario'
          });
        }
      });
    }
  }

  onResetPassword(userId: string) {
    const newPassword = prompt('Ingrese la nueva contraseña:');
    if (newPassword && newPassword.length >= 6) {
      this.userService.resetPassword(userId, newPassword).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Contraseña actualizada correctamente'
          });
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al actualizar contraseña'
          });
        }
      });
    }
  }

  onFormClose() {
    this.showUserForm = false;
    this.selectedUser = null;
    this.loadUsers();
  }

  getRoleName(user: User): string {
    const role = user.role;
    if (typeof role === 'string') {
      return role;
    }
    return role?.nombre || '-';
  }
}
