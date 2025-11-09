import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { RegistroPersonal } from '../../services/report';

interface TableRow {
  fecha: string;
  sede: string;
  edificio: string;
  plasticos?: number;
  organicos?: number;
  vidrio?: number;
  metales?: number;
  papelCarton?: number;
  noAprovechables?: number;
  botellas?: number;
  papelOficina?: number;
  registradoPor: string;
}

@Component({
  selector: 'app-report-table',
  standalone: true,
  imports: [CommonModule, TabsModule, TableModule],
  templateUrl: './report-table.html',
  styleUrl: './report-table.scss',
})
export class ReportTableComponent implements OnChanges {
  @Input() registros: RegistroPersonal[] = [];

  pilasData: TableRow[] = [];
  canastillasData: TableRow[] = [];
  papelOficinaData: TableRow[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registros'] && this.registros) {
      this.processData();
    }
  }

  processData(): void {
    this.pilasData = [];
    this.canastillasData = [];
    this.papelOficinaData = [];

    this.registros.forEach((registro) => {
      const fecha = new Date(registro.fechaRegistro).toLocaleDateString('es-ES');
      const sede = registro.user?.sede?.nombre || 'N/A';
      const edificio = registro.user?.edificio?.nombre || 'N/A';
      const registradoPor = `${registro.user?.nombres || ''} ${registro.user?.apellidos || ''}`.trim();

      if (registro.tipoRecoleccion === 'pilas') {
        this.pilasData.push({
          fecha,
          sede,
          edificio,
          plasticos: registro.plasticosKg ? Number(registro.plasticosKg) : 0,
          organicos: registro.organicosKg ? Number(registro.organicosKg) : 0,
          vidrio: registro.vidrioKg ? Number(registro.vidrioKg) : 0,
          metales: registro.metalesKg ? Number(registro.metalesKg) : 0,
          papelCarton: registro.papelCartonKg ? Number(registro.papelCartonKg) : 0,
          noAprovechables: registro.noAprovechablesKg ? Number(registro.noAprovechablesKg) : 0,
          registradoPor,
        });
      } else if (registro.tipoRecoleccion === 'canastillas') {
        this.canastillasData.push({
          fecha,
          sede,
          edificio,
          botellas: registro.botellasKg ? Number(registro.botellasKg) : 0,
          registradoPor,
        });
      } else if (registro.tipoRecoleccion === 'papel_oficina') {
        this.papelOficinaData.push({
          fecha,
          sede,
          edificio,
          papelOficina: registro.papelOficinaKg ? Number(registro.papelOficinaKg) : 0,
          registradoPor,
        });
      }
    });
  }
}
