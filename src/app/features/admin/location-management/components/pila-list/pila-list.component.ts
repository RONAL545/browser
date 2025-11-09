import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';

import { Pila } from '../../models/pila.interface';
import { SedeService, Sede } from '../../../../../core/services/sede';
import { EdificioService, Edificio } from '../../../../../core/services/edificio';

@Component({
  selector: 'app-pila-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    SelectModule
  ],
  templateUrl: './pila-list.component.html',
  styleUrl: './pila-list.component.scss'
})
export class PilaListComponent implements OnInit, OnChanges {
  @Input() pilas: Pila[] = [];
  @Input() loading = false;
  @Output() edit = new EventEmitter<Pila>();
  @Output() delete = new EventEmitter<Pila>();
  @Output() add = new EventEmitter<void>();

  sedes: Sede[] = [];
  edificios: Edificio[] = [];
  selectedSede: Sede | null = null;
  selectedEdificio: Edificio | null = null;
  filteredPilas: Pila[] = [];

  constructor(
    private sedeService: SedeService,
    private edificioService: EdificioService
  ) {}

  ngOnInit(): void {
    this.loadSedes();
    this.filteredPilas = [...this.pilas];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pilas']) {
      this.applyFilters();
    }
  }

  loadSedes(): void {
    this.sedeService.getSedes().subscribe({
      next: (sedes) => {
        this.sedes = sedes;
      },
      error: (error) => {
        console.error('Error al cargar sedes:', error);
      }
    });
  }

  loadEdificios(): void {
    const sedeId = this.selectedSede?.id;
    this.edificioService.getAll(sedeId).subscribe({
      next: (edificios) => {
        this.edificios = edificios;
      },
      error: (error) => {
        console.error('Error al cargar edificios:', error);
      }
    });
  }

  onSedeChange(): void {
    this.selectedEdificio = null;
    this.edificios = [];
    if (this.selectedSede) {
      this.loadEdificios();
    }
    this.applyFilters();
  }

  onEdificioChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.pilas];

    if (this.selectedSede) {
      filtered = filtered.filter(pila => pila.edificio?.sede?.id === this.selectedSede!.id);
    }

    if (this.selectedEdificio) {
      filtered = filtered.filter(pila => pila.edificio?.id === this.selectedEdificio!.id);
    }

    this.filteredPilas = filtered;
  }

  onEdit(pila: Pila): void {
    this.edit.emit(pila);
  }

  onDelete(pila: Pila): void {
    if (confirm(`¿Está seguro de eliminar la pila "${pila.codigo}"?`)) {
      this.delete.emit(pila);
    }
  }

  onAdd(): void {
    this.add.emit();
  }
}
