import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WasteTypeStats {
  tipoResiduo: string;
  si: number;
  no: number;
  total: number;
  porcentajeSi: number;
  porcentajeNo: number;
}

export interface RegistroEstudiante {
  id: string;
  fechaVerificacion: Date;
  plasticoSegregado: boolean;
  papelCartonSegregado: boolean;
  vidrioSegregado: boolean;
  metalSegregado: boolean;
  organicoSegregado: boolean;
  noAprovechableSegregado: boolean;
  segregacionCorrecta: boolean;
  observaciones?: string;
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

export interface SegregationReportData {
  resumen: {
    totalRegistros: number;
    totalCumplimientos: number;
    totalNoCumplimientos: number;
    cumplimientoPromedio: number;
  };
  estadisticasPorTipo: WasteTypeStats[];
  registros?: RegistroEstudiante[];
}

export interface ReportFilters {
  sedeId?: string;
  edificioId?: string;
  fecha?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SegregationReportService {
  private apiUrl = 'http://localhost:3000/api/registros/segregation-report';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getReport(filters: ReportFilters): Observable<SegregationReportData> {
    let params = new HttpParams();

    if (filters.sedeId) {
      params = params.set('sedeId', filters.sedeId);
    }
    if (filters.edificioId) {
      params = params.set('edificioId', filters.edificioId);
    }
    if (filters.fecha) {
      params = params.set('fecha', filters.fecha);
    }

    return this.http.get<SegregationReportData>(this.apiUrl, { params });
  }

  exportToExcel(filters: ReportFilters): void {
    let params = new HttpParams();

    if (filters.sedeId) {
      params = params.set('sedeId', filters.sedeId);
    }
    if (filters.edificioId) {
      params = params.set('edificioId', filters.edificioId);
    }
    if (filters.fecha) {
      params = params.set('fecha', filters.fecha);
    }

    const url = `${this.apiUrl}/export?${params.toString()}`;

    // Hacer la petición con fetch para incluir autenticación
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
        link.download = `reporte_segregacion_${new Date().toISOString().split('T')[0]}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error al descargar el archivo:', error);
        alert('Error al exportar el archivo. Por favor, intente nuevamente.');
      });
  }
}
