import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './app-button.html',
  styleUrl: './app-button.scss',
})
export class AppButtonComponent {
  @HostBinding('class.full-width') get isFullWidth(): boolean {
    return this.fullWidth;
  }

  @Input() label?: string;
  @Input() icon?: string;
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() rounded = false;
  @Input() iconOnly = false;
  @Input() tooltip?: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth = false;

  @Output() onClick = new EventEmitter<Event>();

  get buttonClass(): string {
    const classes: string[] = [];

    // Variant classes
    switch (this.variant) {
      case 'primary':
        // Default PrimeNG primary style
        break;
      case 'secondary':
        classes.push('p-button-secondary');
        break;
      case 'success':
        classes.push('p-button-success');
        break;
      case 'danger':
        classes.push('p-button-danger');
        break;
      case 'warning':
        classes.push('p-button-warning');
        break;
      case 'info':
        classes.push('p-button-info');
        break;
      case 'text':
        classes.push('p-button-text');
        break;
    }

    classes.push(`app-button-variant-${this.variant}`);

    // Size classes
    if (this.size === 'small') {
      classes.push('p-button-sm');
    } else if (this.size === 'large') {
      classes.push('p-button-lg');
    }

    // Shape classes
    if (this.rounded) {
      classes.push('p-button-rounded');
    }

    return classes.join(' ');
  }

  get computedLabel(): string {
    if (this.iconOnly) {
      return '';
    }
    return this.label ?? '';
  }

  get computedIcon(): string {
    return this.icon ?? '';
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.onClick.emit(event);
    }
  }
}
