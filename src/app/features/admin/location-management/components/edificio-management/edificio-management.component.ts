import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';

// Services
import { EdificioService, Edificio, CreateEdificioDto, UpdateEdificioDto } from '../../../../../core/services/edificio';
import { SedeService, Sede } from '../../../../../core/services/sede';
import { AppButtonComponent } from '../../../../../shared/components/app-button/app-button';
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar';

@Component({
  selector: 'app-edificio-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    MessageModule,
    ConfirmDialogModule,
    TooltipModule,
    AppButtonComponent,
    FilterBarComponent,
  ],
  providers: [ConfirmationService],
  templateUrl: './edificio-management.component.html',
  styleUrl: './edificio-management.component.scss',
})
export class EdificioManagementComponent implements OnInit {
  edificios: Edificio[] = [];
  sedes: Sede[] = [];
  selectedSede: Sede | null = null;
  loading = false;
  showForm = false;
  editMode = false;
  message: { severity: 'success' | 'error' | 'info' | 'warn'; text: string } | null = null;

  // Form fields
  edificioForm: {
    id?: string;
    nombre: string;
    sedeId: string;
  } = {
    nombre: '',
    sedeId: '',
  };

  constructor(
    private edificioService: EdificioService,
    private sedeService: SedeService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadSedes();
    this.loadEdificios();
  }

  loadSedes(): void {
    this.sedeService.getSedes().subscribe({
      next: (sedes) => {
        this.sedes = sedes;
      },
      error: (error) => {
        console.error('Error al cargar sedes:', error);
        this.showMessage('error', 'Error al cargar las sedes');
      },
    });
  }

  loadEdificios(): void {
    this.loading = true;
    const sedeId = this.selectedSede?.id;
    this.edificioService.getAll(sedeId).subscribe({
      next: (edificios) => {
        this.edificios = edificios;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar edificios:', error);
        this.showMessage('error', 'Error al cargar los edificios');
        this.loading = false;
      },
    });
  }

  onSedeChange(): void {
    this.loadEdificios();
  }

  onAdd(): void {
    this.editMode = false;
    this.edificioForm = {
      nombre: '',
      sedeId: this.selectedSede?.id || '',
    };
    this.showForm = true;
  }

  onEdit(edificio: Edificio): void {
    this.editMode = true;
    this.edificioForm = {
      id: edificio.id,
      nombre: edificio.nombre,
      sedeId: edificio.sedeId,
    };
    this.showForm = true;
  }

  onDelete(edificio: Edificio): void {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar el edificio "${edificio.nombre}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí, eliminar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.edificioService.delete(edificio.id).subscribe({
          next: () => {
            this.showMessage('success', 'Edificio eliminado correctamente');
            this.loadEdificios();
          },
          error: (error) => {
            console.error('Error al eliminar edificio:', error);
            this.showMessage('error', error.error?.message || 'Error al eliminar el edificio');
          },
        });
      },
    });
  }

  onSave(): void {
    if (!this.edificioForm.nombre.trim()) {
      this.showMessage('warn', 'El nombre del edificio es requerido');
      return;
    }

    if (!this.edificioForm.sedeId) {
      this.showMessage('warn', 'Debe seleccionar una sede');
      return;
    }

    if (this.editMode && this.edificioForm.id) {
      // Actualizar
      const updateDto: UpdateEdificioDto = {
        nombre: this.edificioForm.nombre,
        sedeId: this.edificioForm.sedeId,
      };

      this.edificioService.update(this.edificioForm.id, updateDto).subscribe({
        next: () => {
          this.showMessage('success', 'Edificio actualizado correctamente');
          this.showForm = false;
          this.loadEdificios();
        },
        error: (error) => {
          console.error('Error al actualizar edificio:', error);
          this.showMessage('error', error.error?.message || 'Error al actualizar el edificio');
        },
      });
    } else {
      // Crear
      const createDto: CreateEdificioDto = {
        nombre: this.edificioForm.nombre,
        sedeId: this.edificioForm.sedeId,
      };

      this.edificioService.create(createDto).subscribe({
        next: () => {
          this.showMessage('success', 'Edificio creado correctamente');
          this.showForm = false;
          this.loadEdificios();
        },
        error: (error) => {
          console.error('Error al crear edificio:', error);
          this.showMessage('error', error.error?.message || 'Error al crear el edificio');
        },
      });
    }
  }

  onCancel(): void {
    this.showForm = false;
    this.edificioForm = {
      nombre: '',
      sedeId: '',
    };
  }

  showMessage(severity: 'success' | 'error' | 'info' | 'warn', text: string): void {
    this.message = { severity, text };
    setTimeout(() => {
      this.message = null;
    }, 5000);
  }
}
