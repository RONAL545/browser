import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss'
})
export class MainSidebarComponent implements OnInit {
  private authService = inject(AuthService);

  @Input() isOpen: boolean = true;

  menuItems: MenuItem[] = [];
  userRole: string = '';
  roleDisplayName: string = '';

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('current_user') || '{}');
    this.userRole = user.role || '';

    // Establecer el nombre a mostrar según el rol
    const roleNames: { [key: string]: string } = {
      'admin': 'ECOTEC Admin',
      'personal': 'Personal',
      'estudiante': 'Estudiante',
      'gestor-ubicaciones': 'Gestor de Ubicaciones'
    };
    this.roleDisplayName = roleNames[this.userRole] || 'ECOTEC';

    // Configurar menú según el rol
    this.setupMenuItems();
  }

  setupMenuItems(): void {
    if (this.userRole === 'admin') {
      this.menuItems = [
        { label: 'Datos', icon: 'pi pi-chart-bar', route: '/app/admin/datos' },
        { label: 'Segregación', icon: 'pi pi-check-square', route: '/app/admin/segregacion' },
        { label: 'Usuarios', icon: 'pi pi-users', route: '/app/admin/usuarios' },
        { label: 'Ubicación', icon: 'pi pi-map-marker', route: '/app/admin/ubicacion' }
      ];
    } else if (this.userRole === 'gestor-ubicaciones') {
      this.menuItems = [
        { label: 'Ubicación', icon: 'pi pi-map-marker', route: '/app/admin/ubicacion' }
      ];
    } else if (this.userRole === 'personal') {
      this.menuItems = [
        { label: 'Dashboard', icon: 'pi pi-home', route: '/app/personal/dashboard' },
        { label: 'Registros', icon: 'pi pi-list', route: '/app/personal/registros' }
      ];
    } else if (this.userRole === 'estudiante') {
      this.menuItems = [
        { label: 'Dashboard', icon: 'pi pi-home', route: '/app/estudiante/dashboard' },
        { label: 'Registros', icon: 'pi pi-list', route: '/app/estudiante/registros' }
      ];
    }
  }

  logout() {
    this.authService.logout();
  }
}
