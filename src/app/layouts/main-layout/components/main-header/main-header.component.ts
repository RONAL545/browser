import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent implements OnInit {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  userMenuOpen = false;
  currentUser: User | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const userStr = localStorage.getItem('current_user');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  toggleUserMenu(event: Event) {
    event.stopPropagation();
    this.userMenuOpen = !this.userMenuOpen;
  }

  closeUserMenu() {
    this.userMenuOpen = false;
  }

  navigateToProfile() {
    this.router.navigate(['/app/profile']).then(success => {
      if (success) {
        setTimeout(() => {
          this.userMenuOpen = false;
        }, 100);
      }
    }).catch(err => {
      console.error('Navigation error:', err);
      this.userMenuOpen = false;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideDropdown = target.closest('.user-dropdown');
    const clickedToggleButton = target.closest('.user-menu-toggle');

    if (!clickedInsideDropdown && !clickedToggleButton && this.userMenuOpen) {
      this.userMenuOpen = false;
    }
  }
}
