import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './main-layout/components/main-header/main-header.component';
import { MainSidebarComponent } from './main-layout/components/main-sidebar/main-sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainHeaderComponent, MainSidebarComponent],
  template: `
    <div class="main-layout">
      <app-main-header (toggleSidebarEvent)="toggleSidebar()"></app-main-header>
      <div class="layout-container">
        <div class="sidebar-overlay"
             *ngIf="sidebarOpen"
             (click)="closeSidebar()"></div>
        <app-main-sidebar [isOpen]="sidebarOpen" [class.sidebar-open]="sidebarOpen"></app-main-sidebar>
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .main-layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .layout-container {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    app-main-sidebar {
      width: 250px;
      flex-shrink: 0;
      transition: transform 0.3s ease, width 0.3s ease;
      transform: translateX(0);
    }

    app-main-sidebar:not(.sidebar-open) {
      transform: translateX(-100%);
      width: 0;
    }

    .sidebar-overlay {
      display: none;
    }

    .main-content {
      flex: 1;
      overflow-y: auto;
      padding: clamp(1rem, 3vw, 2rem);
      background-color: #f8f9fa;
      transition: margin-left 0.3s ease;
    }

    @media (max-width: 768px) {
      .sidebar-overlay {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      app-main-sidebar {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 1000;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
      }

      .main-content {
        padding: 1rem;
        margin-left: 0 !important;
      }
    }
  `]
})
export class MainLayoutComponent {
  sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
