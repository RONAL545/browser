import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// Component Imports
import { RegistrosHeroComponent } from './components/registros-hero/registros-hero.component';
import { RegistrosTableComponent } from './components/registros-table/registros-table.component';

interface Registro {
  id: string;
  fechaRegistro: string;
  tipoRecoleccion: string;
  plasticosKg?: number;
  organicosKg?: number;
  vidrioKg?: number;
  metalesKg?: number;
  papelCartonKg?: number;
  noAprovechablesKg?: number;
  botellasKg?: number;
  papelOficinaKg?: number;
  // Support for backend snake_case
  plasticos_kg?: number;
  organicos_kg?: number;
  vidrio_kg?: number;
  metales_kg?: number;
  papel_carton_kg?: number;
  no_aprovechables_kg?: number;
  botellas_kg?: number;
  papel_oficina_kg?: number;
}

interface ApiResponse {
  registros: Registro[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [
    CommonModule,
    RegistrosHeroComponent,
    RegistrosTableComponent
  ],
  templateUrl: './registros.html',
  styleUrl: './registros.scss',
})
export class RegistrosComponent implements OnInit {
  registros: Registro[] = [];
  loading = true;
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRegistros();
  }

  loadRegistros(): void {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<ApiResponse>(`${this.apiUrl}/registros/personal/historial`, { headers })
      .subscribe({
        next: (response) => {
          this.registros = response.registros;
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        }
      });
  }

  volver(): void {
    this.router.navigate(['/app/personal/dashboard']);
  }
}
