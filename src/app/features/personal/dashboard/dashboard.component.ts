import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// PrimeNG Imports
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

interface MessageType {
  severity: 'error' | 'success' | 'info' | 'warn';
  summary: string;
  detail: string;
}

interface TipoRecoleccion {
  value: 'pilas' | 'canastillas' | 'papel_oficina';
  label: string;
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
    InputNumberModule,
    ButtonModule,
    MessageModule,
    SelectModule,
    AutoCompleteModule,
    BadgeModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  registroForm: FormGroup;
  tipoRecoleccionSeleccionado: 'pilas' | 'canastillas' | 'papel_oficina' = 'pilas';
  activeTabIndex: number = 0;
  isSubmitting = false;
  messages: MessageType[] = [];

  sedeName: string = '';
  edificioName: string = '';

  tiposRecoleccion: TipoRecoleccion[] = [
    { value: 'pilas', label: 'Pilas' },
    { value: 'canastillas', label: 'Canastillas' },
    { value: 'papel_oficina', label: 'Tachos' }
  ];

  private apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      plasticosKg: [''],
      organicosKg: [''],
      vidrioKg: [''],
      metalesKg: [''],
      papelCartonKg: [''],
      noAprovechablesKg: [''],
      botellasKg: [''],
      papelOficinaKg: ['']
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
        detail: 'No se pudo obtener la información de la sede y pabellón'
      }];
      return;
    }

    this.sedeName = user.sede.nombre || 'No asignada';
    this.edificioName = user.edificio.nombre || 'No asignado';
  }

  selectTab(tipo: 'pilas' | 'canastillas' | 'papel_oficina'): void {
    this.tipoRecoleccionSeleccionado = tipo;

    // Reset all fields when switching tabs
    this.registroForm.patchValue({
      plasticosKg: '',
      organicosKg: '',
      vidrioKg: '',
      metalesKg: '',
      papelCartonKg: '',
      noAprovechablesKg: '',
      botellasKg: '',
      papelOficinaKg: ''
    });
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    // Convertir strings vacíos a números (0 si está vacío, o parsear el valor)
    const formValues = this.registroForm.value;
    const formData = {
      tipoRecoleccion: this.tipoRecoleccionSeleccionado,
      plasticosKg: formValues.plasticosKg === '' ? 0 : parseFloat(formValues.plasticosKg) || 0,
      organicosKg: formValues.organicosKg === '' ? 0 : parseFloat(formValues.organicosKg) || 0,
      vidrioKg: formValues.vidrioKg === '' ? 0 : parseFloat(formValues.vidrioKg) || 0,
      metalesKg: formValues.metalesKg === '' ? 0 : parseFloat(formValues.metalesKg) || 0,
      papelCartonKg: formValues.papelCartonKg === '' ? 0 : parseFloat(formValues.papelCartonKg) || 0,
      noAprovechablesKg: formValues.noAprovechablesKg === '' ? 0 : parseFloat(formValues.noAprovechablesKg) || 0,
      botellasKg: formValues.botellasKg === '' ? 0 : parseFloat(formValues.botellasKg) || 0,
      papelOficinaKg: formValues.papelOficinaKg === '' ? 0 : parseFloat(formValues.papelOficinaKg) || 0
    };

    // Validar que al menos un campo sea mayor a 0
    const hayDatos = formData.plasticosKg > 0 ||
                     formData.organicosKg > 0 ||
                     formData.vidrioKg > 0 ||
                     formData.metalesKg > 0 ||
                     formData.papelCartonKg > 0 ||
                     formData.noAprovechablesKg > 0 ||
                     formData.botellasKg > 0 ||
                     formData.papelOficinaKg > 0;

    if (!hayDatos) {
      this.messages = [{
        severity: 'error',
        summary: 'Error',
        detail: 'Debe ingresar al menos un valor mayor a 0 en alguna categoría'
      }];

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.messages = [];
      }, 5000);

      return;
    }

    this.isSubmitting = true;
    this.messages = [];

    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    this.http.post(`${this.apiUrl}/registros/personal`, formData, { headers })
      .subscribe({
        next: (response) => {
          this.messages = [{
            severity: 'success',
            summary: 'Éxito',
            detail: 'Registro guardado exitosamente'
          }];

          this.registroForm.patchValue({
            plasticosKg: '',
            organicosKg: '',
            vidrioKg: '',
            metalesKg: '',
            papelCartonKg: '',
            noAprovechablesKg: '',
            botellasKg: '',
            papelOficinaKg: ''
          });

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
        }
      });
  }

  verRegistros(): void {
    this.router.navigate(['/app/personal/registros']);
  }
}
