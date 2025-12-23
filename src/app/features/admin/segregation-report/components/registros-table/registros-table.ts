import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { RegistroEstudiante } from '../../services/segregation-report.service';

@Component({
  selector: 'app-registros-table',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule],
  templateUrl: './registros-table.html',
  styleUrl: './registros-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrosTableComponent {
  @Input() registros: RegistroEstudiante[] = [];
  @Input() loading = false;

  getStatusText(value: boolean | null): string {
    if (value === null) return 'No hay tacho';
    return value ? 'Sí' : 'No';
  }

  getStatusClass(value: boolean | null): string {
    if (value === null) return 'badge-neutral';
    return value ? 'badge-success' : 'badge-error';
  }
}
