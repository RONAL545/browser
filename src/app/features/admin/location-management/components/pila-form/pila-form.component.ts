import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// PrimeNG Imports
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';

import { Pila } from '../../models/pila.interface';
import { SedeService } from '../../../user-management/services/sede';
import { EdificioService } from '../../../user-management/services/edificio';
import { AppButtonComponent } from '../../../../../shared/components/app-button/app-button';

interface Sede {
  id: string;
  nombre: string;
}

interface Edificio {
  id: string;
  nombre: string;
  sedeId: string;
}

@Component({
  selector: 'app-pila-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    AppButtonComponent,
    MessageModule,
    SelectModule
  ],
  templateUrl: './pila-form.component.html',
  styleUrl: './pila-form.component.scss'
})
export class PilaFormComponent implements OnInit, OnChanges {
  @Input() pila: Pila | null = null;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  pilaForm: FormGroup;
  sedes: Sede[] = [];
  edificios: Edificio[] = [];
  edificiosFiltrados: Edificio[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private sedeService: SedeService,
    private edificioService: EdificioService
  ) {
    this.pilaForm = this.fb.group({
      sedeId: ['', Validators.required],
      edificioId: ['', Validators.required],
      codigo: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    this.loadSedes();
    this.loadEdificios();

    // Deshabilitar edificioId inicialmente
    this.pilaForm.get('edificioId')?.disable();

    // Escuchar cambios en sedeId para filtrar edificios
    this.pilaForm.get('sedeId')?.valueChanges.subscribe(sedeId => {
      this.filterEdificios(sedeId);
      this.pilaForm.patchValue({ edificioId: '' });

      // Habilitar o deshabilitar edificioId según si hay sede seleccionada
      if (sedeId) {
        this.pilaForm.get('edificioId')?.enable();
      } else {
        this.pilaForm.get('edificioId')?.disable();
      }
    });

    if (this.pila) {
      this.pilaForm.patchValue({
        sedeId: this.pila.edificio?.sede?.id || '',
        edificioId: this.pila.edificioId,
        codigo: this.pila.codigo
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Resetear el estado de loading cuando el input pila cambia (incluyendo cuando se vuelve null)
    if (changes['pila']) {
      console.log('=== ngOnChanges DETECTADO ===');
      console.log('Valor anterior de pila:', changes['pila'].previousValue);
      console.log('Valor nuevo de pila:', changes['pila'].currentValue);
      console.log('loading ANTES de resetear:', this.loading);

      this.loading = false;
      this.errorMessage = '';

      console.log('loading DESPUÉS de resetear:', this.loading);
      console.log('usted ya creo el primero ahora deberia poder crear otro');

      // Si pila cambió y no es el primer cambio, resetear el formulario
      if (!changes['pila'].firstChange && !changes['pila'].currentValue) {
        console.log('Reseteando formulario...');
        this.pilaForm.reset();
        this.pilaForm.get('edificioId')?.disable();
      }
    }
  }

  loadSedes(): void {
    this.sedeService.getSedes().subscribe({
      next: (sedes: Sede[]) => {
        this.sedes = sedes;
      },
      error: (error: any) => {
        this.errorMessage = 'Error al cargar las sedes';
      }
    });
  }

  loadEdificios(): void {
    this.edificioService.getEdificios().subscribe({
      next: (edificios: Edificio[]) => {
        this.edificios = edificios;
        if (this.pila) {
          this.filterEdificios(this.pila.edificio?.sede?.id || '');
        }
      },
      error: (error: any) => {
        this.errorMessage = 'Error al cargar los edificios';
      }
    });
  }

  filterEdificios(sedeId: string): void {
    if (sedeId) {
      this.edificiosFiltrados = this.edificios.filter(e => e.sedeId === sedeId);
    } else {
      this.edificiosFiltrados = [];
    }
  }

  onSubmit(): void {
    if (this.pilaForm.invalid) {
      this.pilaForm.markAllAsTouched();
      return;
    }

    console.log('=== ANTES DE GUARDAR ===');
    console.log('loading ANTES:', this.loading);
    this.loading = true;
    this.errorMessage = '';
    console.log('loading DESPUÉS de setear true:', this.loading);

    const formValue = this.pilaForm.value;
    const pilaData = {
      codigo: formValue.codigo,
      edificioId: formValue.edificioId
    };

    console.log('Emitiendo evento save con:', pilaData);
    this.save.emit(pilaData);
    console.log('Evento save emitido');
  }

  onCancel(): void {
    this.cancel.emit();
  }

  get codigo() {
    return this.pilaForm.get('codigo');
  }

  get sedeId() {
    return this.pilaForm.get('sedeId');
  }

  get edificioId() {
    return this.pilaForm.get('edificioId');
  }
}
