import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Imports
import { MessageModule } from 'primeng/message';

import { PilaService } from '../../services/pila.service';
import { Pila, CreatePilaDto, UpdatePilaDto } from '../../models/pila.interface';
import { PilaFormComponent } from '../pila-form/pila-form.component';
import { PilaListComponent } from '../pila-list/pila-list.component';
import { EdificioManagementComponent } from '../edificio-management/edificio-management.component';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [
    CommonModule,
    MessageModule,
    PilaFormComponent,
    PilaListComponent,
    EdificioManagementComponent
  ],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent implements OnInit {
  pilas: Pila[] = [];
  selectedPila: Pila | null = null;
  showForm = false;
  loading = false;
  message: { severity: 'success' | 'error' | 'info' | 'warn'; text: string } | null = null;

  constructor(private pilaService: PilaService) {}

  ngOnInit(): void {
    this.loadPilas();
  }

  loadPilas(): void {
    this.loading = true;
    this.pilaService.getAll().subscribe({
      next: (pilas) => {
        this.pilas = pilas;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar pilas:', error);
        this.showMessage('error', 'Error al cargar las pilas');
        this.loading = false;
      }
    });
  }

  onAdd(): void {
    this.selectedPila = null;
    this.showForm = true;
  }

  onEdit(pila: Pila): void {
    this.selectedPila = pila;
    this.showForm = true;
  }

  onDelete(pila: Pila): void {
    this.pilaService.delete(pila.id).subscribe({
      next: () => {
        this.showMessage('success', 'Pila eliminada correctamente');
        this.loadPilas();
      },
      error: (error) => {
        console.error('Error al eliminar pila:', error);
        this.showMessage('error', error.error?.message || 'Error al eliminar la pila');
      }
    });
  }

  onSave(pilaData: CreatePilaDto | UpdatePilaDto): void {
    if (this.selectedPila) {
      // Actualizar
      this.pilaService.update(this.selectedPila.id, pilaData).subscribe({
        next: () => {
          this.showMessage('success', 'Pila actualizada correctamente');
          this.showForm = false;
          this.selectedPila = null;
          this.loadPilas();
        },
        error: (error) => {
          console.error('Error al actualizar pila:', error);
          this.showMessage('error', error.error?.message || 'Error al actualizar la pila');
        }
      });
    } else {
      // Crear
      this.pilaService.create(pilaData as CreatePilaDto).subscribe({
        next: () => {
          this.showMessage('success', 'Pila creada correctamente');
          this.showForm = false;
          this.loadPilas();
        },
        error: (error) => {
          console.error('Error al crear pila:', error);
          this.showMessage('error', error.error?.message || 'Error al crear la pila');
        }
      });
    }
  }

  onCancel(): void {
    this.showForm = false;
    this.selectedPila = null;
  }

  showMessage(severity: 'success' | 'error' | 'info' | 'warn', text: string): void {
    this.message = { severity, text };
    setTimeout(() => {
      this.message = null;
    }, 5000);
  }
}
