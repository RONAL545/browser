import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-redirect',
  standalone: true,
  template: '<div class="flex items-center justify-center h-screen"><p>Redirigiendo...</p></div>'
})
export class RoleRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('current_user') || '{}');
    const role = user.role;

    // Redirigir según el rol
    switch (role) {
      case 'admin':
        this.router.navigate(['/app/admin']);
        break;
      case 'personal':
        this.router.navigate(['/app/personal/dashboard']);
        break;
      case 'estudiante':
        this.router.navigate(['/app/estudiante/dashboard']);
        break;
      default:
        this.router.navigate(['/auth/login']);
        break;
    }
  }
}
