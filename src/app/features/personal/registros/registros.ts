import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// PrimeNG Imports
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    TableModule,
    CardModule,
    ButtonModule,
    TagModule,
    ProgressSpinnerModule
  ],
  templateUrl: './registros.html',
  styleUrl: './registros.scss',
})
export class RegistrosComponent implements OnInit {
  registros: Registro[] = [];
  loading = true;
  private apiUrl = 'http://localhost:3000/api';

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
          console.error('Error al cargar registros:', error);
          this.loading = false;
        }
      });
  }

  getTipoLabel(tipo: string): string {
    const labels: { [key: string]: string } = {
      'pilas': 'Pilas',
      'canastillas': 'Canastillas',
      'papel_oficina': 'Tachos'
    };
    return labels[tipo] || tipo;
  }

  getTipoSeverity(tipo: string): 'success' | 'info' | 'warn' {
    const severities: { [key: string]: 'success' | 'info' | 'warn' } = {
      'pilas': 'info',
      'canastillas': 'success',
      'papel_oficina': 'warn'
    };
    return severities[tipo] || 'info';
  }

  getTotal(registro: Registro): number {
    const plasticos = Number(registro.plasticosKg || registro.plasticos_kg || 0);
    const organicos = Number(registro.organicosKg || registro.organicos_kg || 0);
    const vidrio = Number(registro.vidrioKg || registro.vidrio_kg || 0);
    const metales = Number(registro.metalesKg || registro.metales_kg || 0);
    const papelCarton = Number(registro.papelCartonKg || registro.papel_carton_kg || 0);
    const noAprovechables = Number(registro.noAprovechablesKg || registro.no_aprovechables_kg || 0);
    const botellas = Number(registro.botellasKg || registro.botellas_kg || 0);
    const papelOficina = Number(registro.papelOficinaKg || registro.papel_oficina_kg || 0);

    return plasticos + organicos + vidrio + metales + papelCarton + noAprovechables + botellas + papelOficina;
  }

  getTotalFormatted(registro: Registro): string {
    const total = this.getTotal(registro);
    if (isNaN(total)) {
      return '0.00';
    }
    return total.toFixed(2);
  }

  getDetalles(registro: Registro): { nombre: string, kg: number }[] {
    const detalles: { nombre: string, kg: number }[] = [];
    
    const plasticos = Number(registro.plasticosKg || registro.plasticos_kg || 0);
    const organicos = Number(registro.organicosKg || registro.organicos_kg || 0);
    const vidrio = Number(registro.vidrioKg || registro.vidrio_kg || 0);
    const metales = Number(registro.metalesKg || registro.metales_kg || 0);
    const papelCarton = Number(registro.papelCartonKg || registro.papel_carton_kg || 0);
    const noAprovechables = Number(registro.noAprovechablesKg || registro.no_aprovechables_kg || 0);
    const botellas = Number(registro.botellasKg || registro.botellas_kg || 0);
    const papelOficina = Number(registro.papelOficinaKg || registro.papel_oficina_kg || 0);

    if (plasticos > 0) detalles.push({ nombre: 'Plásticos', kg: plasticos });
    if (organicos > 0) detalles.push({ nombre: 'Orgánicos', kg: organicos });
    if (vidrio > 0) detalles.push({ nombre: 'Vidrio', kg: vidrio });
    if (metales > 0) detalles.push({ nombre: 'Metales', kg: metales });
    if (papelCarton > 0) detalles.push({ nombre: 'Papel/Cartón', kg: papelCarton });
    if (noAprovechables > 0) detalles.push({ nombre: 'No Aprovechables', kg: noAprovechables });
    if (botellas > 0) detalles.push({ nombre: 'Botellas', kg: botellas });
    if (papelOficina > 0) detalles.push({ nombre: 'Papel Oficina', kg: papelOficina });

    return detalles;
  }

  volver(): void {
    this.router.navigate(['/app/personal/dashboard']);
  }
}
