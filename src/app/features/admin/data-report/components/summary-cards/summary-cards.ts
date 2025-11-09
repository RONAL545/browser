import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RegistroPersonal } from '../../services/report';

interface SummaryMetrics {
  totalRegistros: number;
  totalReciclados: number;
  totalNoAprovechable: number;
  masRecicladoNombre: string;
  masRecicladoKg: number;
  promedioDiario: number;
}

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './summary-cards.html',
  styleUrl: './summary-cards.scss',
})
export class SummaryCards implements OnChanges {
  @Input() registros: RegistroPersonal[] = [];

  metrics: SummaryMetrics = {
    totalRegistros: 0,
    totalReciclados: 0,
    totalNoAprovechable: 0,
    masRecicladoNombre: '-',
    masRecicladoKg: 0,
    promedioDiario: 0
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registros'] && this.registros) {
      this.calculateMetrics();
    }
  }

  private calculateMetrics(): void {
    if (!this.registros || this.registros.length === 0) {
      this.metrics = {
        totalRegistros: 0,
        totalReciclados: 0,
        totalNoAprovechable: 0,
        masRecicladoNombre: '-',
        masRecicladoKg: 0,
        promedioDiario: 0
      };
      return;
    }

    // 1. Total Registros
    this.metrics.totalRegistros = this.registros.length;

    // 2. Total Reciclados (KG) - Suma de todas las categorías reciclables
    this.metrics.totalReciclados = this.registros.reduce((sum, registro) => {
      return sum +
        (registro.plasticosKg || 0) +
        (registro.papelCartonKg || 0) +
        (registro.vidrioKg || 0) +
        (registro.organicosKg || 0) +
        (registro.metalesKg || 0) +
        (registro.botellasKg || 0) +
        (registro.papelOficinaKg || 0);
    }, 0);

    // 3. Total No Aprovechable (KG)
    this.metrics.totalNoAprovechable = this.registros.reduce((sum, registro) => {
      return sum + (registro.noAprovechablesKg || 0);
    }, 0);

    // 4. Más Reciclado - Agrupar categorías similares
    const categorias = {
      'Plástico': this.registros.reduce((sum, r) => sum + (r.plasticosKg || 0) + (r.botellasKg || 0), 0),
      'Papel/Cartón': this.registros.reduce((sum, r) => sum + (r.papelCartonKg || 0) + (r.papelOficinaKg || 0), 0),
      'Vidrio': this.registros.reduce((sum, r) => sum + (r.vidrioKg || 0), 0),
      'Orgánico': this.registros.reduce((sum, r) => sum + (r.organicosKg || 0), 0),
      'Metal': this.registros.reduce((sum, r) => sum + (r.metalesKg || 0), 0)
    };

    // Encontrar la categoría con más kilogramos
    let maxCategoria = '-';
    let maxKg = 0;

    Object.entries(categorias).forEach(([nombre, kg]) => {
      if (kg > maxKg) {
        maxKg = kg;
        maxCategoria = nombre;
      }
    });

    this.metrics.masRecicladoNombre = maxCategoria;
    this.metrics.masRecicladoKg = maxKg;

    // 5. Promedio Diario (KG)
    // Obtener días únicos que tuvieron registros
    const diasUnicos = new Set(
      this.registros.map(r => new Date(r.fechaRegistro).toDateString())
    );
    const numeroDias = diasUnicos.size;

    if (numeroDias > 0) {
      const totalKg = this.metrics.totalReciclados + this.metrics.totalNoAprovechable;
      this.metrics.promedioDiario = totalKg / numeroDias;
    } else {
      this.metrics.promedioDiario = 0;
    }
  }
}
