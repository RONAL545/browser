import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIChart } from 'primeng/chart';
import { Statistics, ReportFilters } from '../../services/report';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  imports: [CommonModule, UIChart],
  templateUrl: './report-summary.html',
  styleUrl: './report-summary.scss',
})
export class ReportSummaryComponent implements OnChanges {
  @Input() statistics: Statistics | null = null;
  @Input() currentFilters: ReportFilters = {};

  // Propiedad para controlar la visibilidad del gráfico de sedes
  showSedesChart = true;

  // Datos para el gráfico circular (pie)
  pieChartData: any;
  pieChartOptions: any;

  // Datos para el gráfico de barras por sedes
  barChartSedesData: any;
  barChartSedesOptions: any;

  // Datos para el gráfico de barras por edificios
  barChartEdificiosData: any;
  barChartEdificiosOptions: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['statistics'] && this.statistics) {
      this.updateCharts();
    }

    if (changes['currentFilters']) {
      // Ocultar el gráfico de sedes si hay un filtro de sede activo
      this.showSedesChart = !this.currentFilters.sedeId;
    }
  }

  updateCharts(): void {
    if (!this.statistics) return;

    // Configurar gráfico circular (pie) - Tipos de residuos
    // Unificar Botellas con Plásticos y Papel Oficina con Papel/Cartón
    const totales = this.statistics.totalesPorTipo;
    const labels = [
      'Plásticos',
      'Orgánicos',
      'Vidrio',
      'Metales',
      'Papel y Cartón',
      'No Aprovechables'
    ];
    const data = [
      totales.plasticos + totales.botellas, // Plásticos + Botellas
      totales.organicos,
      totales.vidrio,
      totales.metales,
      totales.papelCarton + totales.papelOficina, // Papel/Cartón + Papel Oficina
      totales.noAprovechables
    ];

    this.pieChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            '#f1e9e99c',  // Plásticos
            '#6f4e37',    // Orgánicos
            '#808080',    // Vidrio
            '#ffeb00',    // Metales
            '#1c5efb',    // Papel y Cartón
            '#000000'     // No Aprovechables
          ]
        }
      ]
    };

    this.pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(2);
              return `${label}: ${value.toFixed(2)} kg (${percentage}%)`;
            }
          }
        }
      }
    };

    // Configurar gráfico de barras por sedes
    // Unificar Botellas con Plásticos y Papel Oficina con Papel/Cartón
    const sedeNames = Object.keys(this.statistics.totalesPorSede);
    const sedesDatasets = [
      {
        label: 'Plásticos',
        backgroundColor: '#f1e9e99c',
        data: sedeNames.map(s =>
          (this.statistics!.totalesPorSede[s]?.['plasticos'] || 0) +
          (this.statistics!.totalesPorSede[s]?.['botellas'] || 0)
        )
      },
      {
        label: 'Orgánicos',
        backgroundColor: '#6f4e37',
        data: sedeNames.map(s => this.statistics!.totalesPorSede[s]?.['organicos'] || 0)
      },
      {
        label: 'Vidrio',
        backgroundColor: '#808080',
        data: sedeNames.map(s => this.statistics!.totalesPorSede[s]?.['vidrio'] || 0)
      },
      {
        label: 'Metales',
        backgroundColor: '#ffeb00',
        data: sedeNames.map(s => this.statistics!.totalesPorSede[s]?.['metales'] || 0)
      },
      {
        label: 'Papel y Cartón',
        backgroundColor: '#1c5efb',
        data: sedeNames.map(s =>
          (this.statistics!.totalesPorSede[s]?.['papelCarton'] || 0) +
          (this.statistics!.totalesPorSede[s]?.['papelOficina'] || 0)
        )
      },
      {
        label: 'No Aprovechables',
        backgroundColor: '#000000',
        data: sedeNames.map(s => this.statistics!.totalesPorSede[s]?.['noAprovechables'] || 0)
      }
    ];

    this.barChartSedesData = {
      labels: sedeNames,
      datasets: sedesDatasets
    };

    this.barChartSedesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: false
        },
        y: {
          stacked: false,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Kilogramos (kg)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            font: {
              size: 11
            }
          }
        },
        title: {
          display: false
        }
      },
      barPercentage: 0.9,
      categoryPercentage: 0.8
    };

    // Configurar gráfico de barras por edificios
    // Unificar Botellas con Plásticos y Papel Oficina con Papel/Cartón
    const edificioNames = Object.keys(this.statistics.totalesPorEdificio);
    const edificiosDatasets = [
      {
        label: 'Plásticos',
        backgroundColor: '#f1e9e99c',
        data: edificioNames.map(e =>
          (this.statistics!.totalesPorEdificio[e]?.['plasticos'] || 0) +
          (this.statistics!.totalesPorEdificio[e]?.['botellas'] || 0)
        )
      },
      {
        label: 'Orgánicos',
        backgroundColor: '#6f4e37',
        data: edificioNames.map(e => this.statistics!.totalesPorEdificio[e]?.['organicos'] || 0)
      },
      {
        label: 'Vidrio',
        backgroundColor: '#808080',
        data: edificioNames.map(e => this.statistics!.totalesPorEdificio[e]?.['vidrio'] || 0)
      },
      {
        label: 'Metales',
        backgroundColor: '#ffeb00',
        data: edificioNames.map(e => this.statistics!.totalesPorEdificio[e]?.['metales'] || 0)
      },
      {
        label: 'Papel y Cartón',
        backgroundColor: '#1c5efb',
        data: edificioNames.map(e =>
          (this.statistics!.totalesPorEdificio[e]?.['papelCarton'] || 0) +
          (this.statistics!.totalesPorEdificio[e]?.['papelOficina'] || 0)
        )
      },
      {
        label: 'No Aprovechables',
        backgroundColor: '#000000',
        data: edificioNames.map(e => this.statistics!.totalesPorEdificio[e]?.['noAprovechables'] || 0)
      }
    ];

    this.barChartEdificiosData = {
      labels: edificioNames,
      datasets: edificiosDatasets
    };

    this.barChartEdificiosOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: false
        },
        y: {
          stacked: false,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Kilogramos (kg)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            font: {
              size: 11
            }
          }
        },
        title: {
          display: false
        }
      },
      barPercentage: 0.9,
      categoryPercentage: 0.8
    };
  }
}
