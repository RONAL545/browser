import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportFiltersComponent } from '../report-filters/report-filters';
import { ReportMetricsComponent } from '../report-metrics/report-metrics';
import { ReportSummaryComponent } from '../report-summary/report-summary';
import { ReportTableComponent } from '../report-table/report-table';
import { Report, ReportFilters, Statistics } from '../../services/report';

@Component({
  selector: 'app-data-report-page',
  standalone: true,
  imports: [
    CommonModule,
    ReportFiltersComponent,
    ReportMetricsComponent,
    ReportSummaryComponent,
    ReportTableComponent
  ],
  templateUrl: './data-report-page.html',
  styleUrl: './data-report-page.scss',
})
export class DataReportPageComponent {
  statistics: Statistics | null = null;
  currentFilters: ReportFilters = {};
  loading = false;
  error: string | null = null;

  constructor(private reportService: Report) {}

  onFilterChange(filters: ReportFilters): void {
    this.currentFilters = filters;
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error = null;

    this.reportService.getStatistics(this.currentFilters).subscribe({
      next: (data) => {
        this.statistics = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los datos. Por favor, intenta nuevamente.';
        this.loading = false;
      }
    });
  }

  onExport(): void {
    this.reportService.exportToExcel(this.currentFilters);
  }
}
