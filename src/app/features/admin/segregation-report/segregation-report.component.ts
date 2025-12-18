// Segregation Report Component
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import {
  SegregationReportService,
  WasteTypeStats,
  SegregationReportData,
  ReportFilters
} from './services/segregation-report.service';
import { SedeService, Sede } from '../../../core/services/sede';
import { EdificioService, Edificio } from '../../../core/services/edificio';
import { SegregationMetricsComponent } from './components/segregation-metrics/segregation-metrics';
import { SegregationSummaryComponent } from './components/segregation-summary/segregation-summary';
import { RegistrosTableComponent } from './components/registros-table/registros-table';
import { AppButtonComponent } from '../../../shared/components/app-button/app-button';
import { FilterBarComponent } from '../../../shared/components/filter-bar/filter-bar';

@Component({
  selector: 'app-segregation-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    SelectModule,
    DatePickerModule,
    ButtonModule,
    TableModule,
    ChartModule,
    SegregationMetricsComponent,
    SegregationSummaryComponent,
    RegistrosTableComponent,
    AppButtonComponent,
    FilterBarComponent
  ],
  templateUrl: './segregation-report.component.html',
  styleUrls: ['./segregation-report.component.scss']
})
export class SegregationReportComponent implements OnInit {
  sedes: Sede[] = [];
  edificios: Edificio[] = [];
  edificiosFiltrados: Edificio[] = [];

  selectedSedeId: string | null = null;
  selectedEdificioId: string | null = null;
  selectedDate: Date | null = null;

  reportData: SegregationReportData | null = null;
  loading = false;
  currentFilters: ReportFilters = {};

  chartOptions: any;

  constructor(
    private reportService: SegregationReportService,
    private sedeService: SedeService,
    private edificioService: EdificioService
  ) {
    this.initChartOptions();
  }

  ngOnInit(): void {
    this.loadSedes();
    this.loadEdificios();
    this.loadReport();
  }

  initChartOptions(): void {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = context.parsed || 0;
              return `${label}: ${value.toFixed(1)}%`;
            }
          }
        }
      }
    };
  }

  loadSedes(): void {
    this.sedeService.getSedes().subscribe({
      next: (sedes: Sede[]) => {
        this.sedes = sedes;
      },
      error: (error: any) => {
      }
    });
  }

  loadEdificios(): void {
    this.edificioService.getEdificios().subscribe({
      next: (edificios: Edificio[]) => {
        this.edificios = edificios;
        this.filterEdificios();
      },
      error: (error: any) => {
      }
    });
  }

  onSedeChange(): void {
    this.selectedEdificioId = null;
    this.filterEdificios();
  }

  filterEdificios(): void {
    if (this.selectedSedeId) {
      this.edificiosFiltrados = this.edificios.filter(
        e => e.sedeId === this.selectedSedeId
      );
    } else {
      this.edificiosFiltrados = [...this.edificios];
    }
  }

  loadReport(): void {
    this.loading = true;

    const filters: ReportFilters = {};

    if (this.selectedSedeId) {
      filters.sedeId = this.selectedSedeId;
    }
    if (this.selectedEdificioId) {
      filters.edificioId = this.selectedEdificioId;
    }
    if (this.selectedDate) {
      filters.fecha = this.selectedDate.toISOString().split('T')[0];
    }

    // Actualizar currentFilters antes de la petición
    this.currentFilters = { ...filters };

    this.reportService.getReport(filters).subscribe({
      next: (data: SegregationReportData) => {
        this.reportData = data;
        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
      }
    });
  }

  clearFilters(): void {
    this.selectedSedeId = null;
    this.selectedEdificioId = null;
    this.selectedDate = null;
    this.filterEdificios();
    this.loadReport();
  }

  getChartData(stat: WasteTypeStats): any {
    return {
      labels: ['Sí', 'No'],
      datasets: [
        {
          data: [stat.porcentajeSi, stat.porcentajeNo],
          backgroundColor: ['#10b981', '#ef4444'],
          borderWidth: 0
        }
      ]
    };
  }

  exportToExcel(): void {
    if (!this.reportData?.registros || this.reportData.registros.length === 0) {
      alert('No hay datos para exportar.');
      return;
    }

    this.reportService.exportToExcel(this.currentFilters);
  }
}
