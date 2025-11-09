import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// PrimeNG Imports
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

interface MessageType {
  severity: 'error' | 'success' | 'info' | 'warn';
  summary: string;
  detail: string;
}

interface Pila {
  id: string;
  codigo: string;
}

interface TipoResiduoConfig {
  nombre: string;
  color: string;
  icono: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    SelectModule,
    RadioButtonModule,
    CheckboxModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  registroForm: FormGroup;
  isSubmitting = false;
  messages: MessageType[] = [];

  sedeName: string = '';
  edificioName: string = '';
  pilas: Pila[] = [];

  // Track selections: Map<residuoIndex, esCorrecto (true=SI, false=NO)>
  selecciones: Map<number, boolean> = new Map();

  tiposResiduos: TipoResiduoConfig[] = [
    { nombre: 'Papel y Cartón', color: 'bg-blue-500', icono: 'pi-file' },
    { nombre: 'Plásticos', color: 'bg-gray-400', icono: 'pi-box' },
    { nombre: 'Metales', color: 'bg-yellow-500', icono: 'pi-circle' },
    { nombre: 'Orgánicos', color: 'bg-amber-700', icono: 'pi-sun' },
    { nombre: 'Vidrios', color: 'bg-gray-600', icono: 'pi-star' },
    { nombre: 'No aprovechables', color: 'bg-black', icono: 'pi-times' }
  ];

  private apiUrl = 'http://localhost:3000/api';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      pilaId: ['', Validators.required],
      observaciones: ['']
    });
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    const user = JSON.parse(localStorage.getItem('current_user') || '{}');

    if (!user.sede || !user.edificio) {
      this.messages = [{
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo obtener la información de la sede y edificio'
      }];
      return;
    }

    this.sedeName = user.sede.nombre || 'No asignada';
    this.edificioName = user.edificio.nombre || 'No asignado';

    // Cargar pilas del edificio asignado
    this.loadPilas();
  }

  loadPilas(): void {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Pila[]>(`${this.apiUrl}/pilas/mi-edificio`, { headers })
      .subscribe({
        next: (pilas) => {
          this.pilas = pilas;

          // Si hay pilas, seleccionar la primera automáticamente
          if (pilas && pilas.length > 0) {
            this.registroForm.patchValue({
              pilaId: pilas[0].id
            });
          }
        },
        error: (error) => {
          console.error('Error al cargar pilas:', error);
          this.messages = [{
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudieron cargar las pilas'
          }];
          setTimeout(() => { this.messages = []; }, 5000);
        }
      });
  }

  // Seleccionar checkbox: permite múltiples residuos pero solo SI o NO por residuo
  seleccionarCheckbox(residuoIndex: number, esCorrecto: boolean): void {
    const currentValue = this.selecciones.get(residuoIndex);

    if (currentValue === esCorrecto) {
      // Si se clickea la misma casilla, deseleccionar ese residuo
      this.selecciones.delete(residuoIndex);
    } else {
      // Seleccionar o cambiar la selección para este residuo
      this.selecciones.set(residuoIndex, esCorrecto);
    }
  }

  // Verificar si un checkbox está seleccionado
  isCheckboxSelected(residuoIndex: number, esCorrecto: boolean): boolean {
    return this.selecciones.get(residuoIndex) === esCorrecto;
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      this.messages = [{
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete todos los campos obligatorios'
      }];
      setTimeout(() => { this.messages = []; }, 5000);
      return;
    }

    // Validar que se haya seleccionado al menos una casilla
    if (this.selecciones.size === 0) {
      this.messages = [{
        severity: 'error',
        summary: 'Error',
        detail: 'Debe seleccionar al menos un tipo de residuo'
      }];
      setTimeout(() => { this.messages = []; }, 5000);
      return;
    }

    this.isSubmitting = true;
    this.messages = [];

    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // Construir array de residuos con su estado de segregación
    const residuos: Array<{nombre: string, segregado: boolean}> = [];
    let todosCorrectamenteSegregados = true;

    this.selecciones.forEach((esCorrecto, index) => {
      const tipoNombre = this.tiposResiduos[index].nombre;
      residuos.push({
        nombre: tipoNombre,
        segregado: esCorrecto
      });

      if (!esCorrecto) {
        todosCorrectamenteSegregados = false;
      }
    });

    const formData = {
      pilaId: this.registroForm.value.pilaId,
      observaciones: this.registroForm.value.observaciones || '',
      segregacionCorrecta: todosCorrectamenteSegregados,
      residuos: residuos
    };

    this.http.post(`${this.apiUrl}/registros/estudiante`, formData, { headers })
      .subscribe({
        next: (response) => {
          this.messages = [{
            severity: 'success',
            summary: 'Éxito',
            detail: 'Registro guardado exitosamente'
          }];

          // Resetear formulario
          this.registroForm.patchValue({
            pilaId: '',
            observaciones: ''
          });
          this.selecciones.clear();

          this.isSubmitting = false;

          // Clear success message after 5 seconds
          setTimeout(() => {
            this.messages = [];
          }, 5000);
        },
        error: (error) => {
          console.error('Error al guardar registro:', error);
          this.messages = [{
            severity: 'error',
            summary: 'Error',
            detail: error.error?.message || 'Error al guardar el registro'
          }];
          this.isSubmitting = false;

          // Clear error messages too
          setTimeout(() => {
            this.messages = [];
          }, 5000);
        }
      });
  }

  verRegistros(): void {
    this.router.navigate(['/app/estudiante/registros']);
  }
}
