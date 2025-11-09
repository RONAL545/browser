import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './app-dialog.component.html',
  styleUrl: './app-dialog.component.scss'
})
export class AppDialogComponent {
  @Input() visible = false;
  @Input() title = '';
  @Input() width = '600px';
  @Input() closable = true;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onHide = new EventEmitter<void>();

  handleHide(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.onHide.emit();
  }
}
