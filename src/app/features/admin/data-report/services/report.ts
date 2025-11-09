import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReportFilters {
  startDate?: string;
  endDate?: string;
  sedeId?: string;
  edificioId?: string;
}

export interface RegistroPersonal {
  id: string;
  fechaRegistro: Date;
  tipoRecoleccion: string;
  plasticosKg?: number;
  organicosKg?: number;
  vidrioKg?: number;
  metalesKg?: number;
  papelCartonKg?: number;
  noAprovechablesKg?: number;
  botellasKg?: number;
  papelOficinaKg?: number;
  user?: {
    id: string;
    nombres: string;
    apellidos: string;
    identifier: string;
    sede?: {
      id: string;
      nombre: string;
    };
    edificio?: {
      id: string;
      nombre: string;
    };
  };
}

export interface Statistics {
  registros: RegistroPersonal[];
  totalesPorTipo: {
    plasticos: number;
    organicos: number;
    vidrio: number;
    metales: number;
    papelCarton: number;
    noAprovechables: number;
    botellas: number;
    papelOficina: number;
  };
  totalesPorSede: Record<string, Record<string, number>>;
  totalesPorEdificio: Record<string, Record<string, number>>;
  totalGeneral: number;
  totalRegistros: number;
}

@Injectable({
  providedIn: 'root'
})
export class Report {
  private apiUrl = 'http://localhost:3000/api/registros/personal';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getStatistics(filters: ReportFilters): Observable<Statistics> {
    let params = new HttpParams();
    if (filters.startDate) params = params.set('startDate', filters.startDate);
    if (filters.endDate) params = params.set('endDate', filters.endDate);
    if (filters.sedeId) params = params.set('sedeId', filters.sedeId);
    if (filters.edificioId) params = params.set('edificioId', filters.edificioId);

    return this.http.get<Statistics>(`${this.apiUrl}/estadisticas`, {
      headers: this.getHeaders(),
      params
    });
  }

  exportToExcel(filters: ReportFilters): void {
    let params = new HttpParams();
    if (filters.startDate) params = params.set('startDate', filters.startDate);
    if (filters.endDate) params = params.set('endDate', filters.endDate);
    if (filters.sedeId) params = params.set('sedeId', filters.sedeId);
    if (filters.edificioId) params = params.set('edificioId', filters.edificioId);

    const url = `${this.apiUrl}/export?${params.toString()}`;

    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `reporte_reciclaje_${new Date().toISOString().split('T')[0]}.xlsx`);

    // Para que funcione con autenticación, necesitamos hacer la petición con fetch
    fetch(url, {
      headers: this.getHeaders().keys().reduce((acc, key) => {
        acc[key] = this.getHeaders().get(key) || '';
        return acc;
      }, {} as Record<string, string>)
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `reporte_reciclaje_${new Date().toISOString().split('T')[0]}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error al descargar el archivo:', error));
  }
}
