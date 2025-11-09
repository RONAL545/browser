export interface ReportFilters {
  startDate?: Date | string;
  endDate?: Date | string;
  sedeId?: number;
  edificioId?: number;
  pilaId?: number;
  tipoResiduos?: string[];
}

export interface ReportData {
  id: number;
  fecha: Date | string;
  sede: string;
  edificio: string;
  pila: string;
  tipoResiduo: string;
  cantidad: number;
  unidad: string;
  registradoPor: string;
}

export interface ReportSummary {
  totalKilos: number;
  totalRegistros: number;
  promedioKilosPorDia: number;
  residuoMasReciclado: string;
  tendencia: 'up' | 'down' | 'stable';
}
