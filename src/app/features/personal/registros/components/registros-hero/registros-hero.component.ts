import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../../../../../shared/components/app-button/app-button';

@Component({
  selector: 'app-registros-hero',
  standalone: true,
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './registros-hero.component.html',
  styleUrl: './registros-hero.component.scss',
})
export class RegistrosHeroComponent {
  @Output() onBack = new EventEmitter<void>();

  handleBack(): void {
    this.onBack.emit();
  }
}
