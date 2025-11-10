import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIChart } from 'primeng/chart';
import { RegistroEstudiante, ReportFilters } from '../../services/segregation-report.service';

@Component({
  selector: 'app-segregation-summary',
  standalone: true,
  imports: [CommonModule, UIChart],
  templateUrl: './segregation-summary.html',
  styleUrl: './segregation-summary.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegregationSummaryComponent implements OnChanges {
  @Input() registros: RegistroEstudiante[] = [];
  @Input() currentFilters: ReportFilters = {};

  // Gráfico circular (Pie Chart)
  pieChartData: any = null;
  pieChartOptions: any = null;

  // Gráfico de barras agrupadas y apiladas
  barChartData: any = null;
  barChartOptions: any = null;

  private isInitialized = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registros'] && this.registros && this.registros.length > 0) {
      // Solo actualizar si hay cambios reales en los datos
      if (!this.isInitialized || this.hasDataChanged(changes['registros'])) {
        this.updateCharts();
        this.isInitialized = true;
      }
    } else if (changes['currentFilters'] && this.isInitialized) {
      // Solo actualizar gráfico de barras cuando cambien los filtros
      this.updateBarChart();
    }
  }

  private hasDataChanged(change: any): boolean {
    if (!change.previousValue) return true;
    return change.currentValue.length !== change.previousValue.length;
  }

  private updateCharts(): void {
    if (!this.registros || this.registros.length === 0) {
      this.pieChartData = null;
      this.barChartData = null;
      return;
    }

    this.updatePieChart();
    this.updateBarChart();
  }

  private updatePieChart(): void {
    // Contar el total de verificaciones individuales de los 6 tipos de residuos
    let totalVerificaciones = 0;
    let verificacionesCorrectas = 0;

    this.registros.forEach(registro => {
      // Cada registro tiene 6 verificaciones (una por cada tipo de residuo)
      totalVerificaciones += 6;

      // Contar cuántas de esas 6 verificaciones fueron correctas
      if (registro.plasticoSegregado) verificacionesCorrectas++;
      if (registro.papelCartonSegregado) verificacionesCorrectas++;
      if (registro.vidrioSegregado) verificacionesCorrectas++;
      if (registro.metalSegregado) verificacionesCorrectas++;
      if (registro.organicoSegregado) verificacionesCorrectas++;
      if (registro.noAprovechableSegregado) verificacionesCorrectas++;
    });

    const verificacionesIncorrectas = totalVerificaciones - verificacionesCorrectas;
    const porcentajeCorrectos = (verificacionesCorrectas / totalVerificaciones) * 100;
    const porcentajeIncorrectos = (verificacionesIncorrectas / totalVerificaciones) * 100;

    this.pieChartData = {
      labels: ['Correctas', 'Incorrectas'],
      datasets: [
        {
          data: [porcentajeCorrectos, porcentajeIncorrectos],
          backgroundColor: ['#10b981', '#ef4444'],
          borderWidth: 0
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
              const count = label === 'Correctas' ? verificacionesCorrectas : verificacionesIncorrectas;
              return `${label}: ${value.toFixed(1)}% (${count} verificaciones)`;
            }
          }
        }
      }
    };
  }

  private updateBarChart(): void {
    // Colores de los residuos (tomados de report-summary)
    const colores = {
      plastico: '#f1e9e99c',
      organico: '#6f4e37',
      vidrio: '#808080',
      metal: '#ffeb00',
      papelCarton: '#1c5efb',
      noAprovechable: '#000000'
    };

    // Determinar el eje X según los filtros
    let labels: string[] = [];
    let groupedData: Map<string, any> = new Map();

    if (!this.currentFilters.sedeId && !this.currentFilters.edificioId) {
      // Sin filtros: agrupar por SEDE
      this.registros.forEach(reg => {
        const sede = reg.user?.sede?.nombre || 'Sin sede';
        if (!groupedData.has(sede)) {
          groupedData.set(sede, this.createEmptyStats());
        }
        this.updateStats(groupedData.get(sede)!, reg);
      });
      labels = Array.from(groupedData.keys());
    } else if (this.currentFilters.sedeId && !this.currentFilters.edificioId) {
      // Filtro de sede: agrupar por EDIFICIO
      this.registros.forEach(reg => {
        const edificio = reg.user?.edificio?.nombre || 'Sin edificio';
        if (!groupedData.has(edificio)) {
          groupedData.set(edificio, this.createEmptyStats());
        }
        this.updateStats(groupedData.get(edificio)!, reg);
      });
      labels = Array.from(groupedData.keys());
    } else if (this.currentFilters.sedeId && this.currentFilters.edificioId) {
      // Filtro de sede y edificio: agrupar por PILA
      // Nota: necesitarías agregar pilaId al modelo RegistroEstudiante
      // Por ahora agruparemos por edificio como fallback
      this.registros.forEach(reg => {
        const edificio = reg.user?.edificio?.nombre || 'Sin edificio';
        if (!groupedData.has(edificio)) {
          groupedData.set(edificio, this.createEmptyStats());
        }
        this.updateStats(groupedData.get(edificio)!, reg);
      });
      labels = Array.from(groupedData.keys());
    }

    // Construir datasets para cada tipo de residuo
    const datasets = [
      {
        label: 'Plástico - Correctos',
        backgroundColor: colores.plastico,
        stack: 'Si',
        data: labels.map(l => groupedData.get(l)!.plasticoSi)
      },
      {
        label: 'Orgánico - Correctos',
        backgroundColor: colores.organico,
        stack: 'Si',
        data: labels.map(l => groupedData.get(l)!.organicoSi)
      },
      {
        label: 'Vidrio - Correctos',
        backgroundColor: colores.vidrio,
        stack: 'Si',
        data: labels.map(l => groupedData.get(l)!.vidrioSi)
      },
      {
        label: 'Metal - Correctos',
        backgroundColor: colores.metal,
        stack: 'Si',
        data: labels.map(l => groupedData.get(l)!.metalSi)
      },
      {
        label: 'Papel/Cartón - Correctos',
        backgroundColor: colores.papelCarton,
        stack: 'Si',
        data: labels.map(l => groupedData.get(l)!.papelCartonSi)
      },
      {
        label: 'No Aprovechable - Correctos',
        backgroundColor: colores.noAprovechable,
        stack: 'Si',
        data: labels.map(l => groupedData.get(l)!.noAprovechableSi)
      },
      {
        label: 'Plástico - Incorrectos',
        backgroundColor: colores.plastico,
        stack: 'No',
        data: labels.map(l => groupedData.get(l)!.plasticoNo)
      },
      {
        label: 'Orgánico - Incorrectos',
        backgroundColor: colores.organico,
        stack: 'No',
        data: labels.map(l => groupedData.get(l)!.organicoNo)
      },
      {
        label: 'Vidrio - Incorrectos',
        backgroundColor: colores.vidrio,
        stack: 'No',
        data: labels.map(l => groupedData.get(l)!.vidrioNo)
      },
      {
        label: 'Metal - Incorrectos',
        backgroundColor: colores.metal,
        stack: 'No',
        data: labels.map(l => groupedData.get(l)!.metalNo)
      },
      {
        label: 'Papel/Cartón - Incorrectos',
        backgroundColor: colores.papelCarton,
        stack: 'No',
        data: labels.map(l => groupedData.get(l)!.papelCartonNo)
      },
      {
        label: 'No Aprovechable - Incorrectos',
        backgroundColor: colores.noAprovechable,
        stack: 'No',
        data: labels.map(l => groupedData.get(l)!.noAprovechableNo)
      }
    ];

    // Agregar "(Sí, No)" a cada label del eje X
    const labelsWithSiNo = labels.map(label => `${label} (Sí, No)`);

    this.barChartData = {
      labels: labelsWithSiNo,
      datasets: datasets
    };

    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Número de Registros'
          }
        }
      },
      plugins: {
        legend: {
          display: false  // Ocultar leyendas debajo del gráfico
        },
        title: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.dataset.label || '';
              const value = context.parsed.y || 0;
              return `${label}: ${value} registros`;
            }
          }
        }
      }
    };
  }

  private createEmptyStats() {
    return {
      plasticoSi: 0,
      plasticoNo: 0,
      organicoSi: 0,
      organicoNo: 0,
      vidrioSi: 0,
      vidrioNo: 0,
      metalSi: 0,
      metalNo: 0,
      papelCartonSi: 0,
      papelCartonNo: 0,
      noAprovechableSi: 0,
      noAprovechableNo: 0
    };
  }

  private updateStats(stats: any, registro: RegistroEstudiante): void {
    if (registro.plasticoSegregado) {
      stats.plasticoSi++;
    } else {
      stats.plasticoNo++;
    }

    if (registro.organicoSegregado) {
      stats.organicoSi++;
    } else {
      stats.organicoNo++;
    }

    if (registro.vidrioSegregado) {
      stats.vidrioSi++;
    } else {
      stats.vidrioNo++;
    }

    if (registro.metalSegregado) {
      stats.metalSi++;
    } else {
      stats.metalNo++;
    }

    if (registro.papelCartonSegregado) {
      stats.papelCartonSi++;
    } else {
      stats.papelCartonNo++;
    }

    if (registro.noAprovechableSegregado) {
      stats.noAprovechableSi++;
    } else {
      stats.noAprovechableNo++;
    }
  }
}
