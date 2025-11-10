import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { RegistroEstudiante } from '../../services/segregation-report.service';

interface SegregationMetrics {
  tasaSegregacion: number;
  peorSede: { nombre: string; tasa: number } | null;
  peorEdificio: { nombre: string; sede: string; tasa: number } | null;
  mejorSede: { nombre: string; tasa: number } | null;
  mejorEdificio: { nombre: string; sede: string; tasa: number } | null;
  totalVerificacionesHoy: number;
}

@Component({
  selector: 'app-segregation-metrics',
  standalone: true,
  imports: [CommonModule, CardModule, TooltipModule],
  templateUrl: './segregation-metrics.html',
  styleUrl: './segregation-metrics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegregationMetricsComponent implements OnChanges {
  @Input() registros: RegistroEstudiante[] = [];
  @Input() currentDate: Date | null = null;
  @Input() hasSedeFilter: boolean = false;
  @Input() hasEdificioFilter: boolean = false;

  metrics: SegregationMetrics = {
    tasaSegregacion: 0,
    peorSede: null,
    peorEdificio: null,
    mejorSede: null,
    mejorEdificio: null,
    totalVerificacionesHoy: 0
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registros'] || changes['currentDate']) {
      this.calculateMetrics();
    }
  }

  private calculateMetrics(): void {
    if (!this.registros || this.registros.length === 0) {
      this.metrics = {
        tasaSegregacion: 0,
        peorSede: null,
        peorEdificio: null,
        mejorSede: null,
        mejorEdificio: null,
        totalVerificacionesHoy: 0
      };
      return;
    }

    // 1. Tasa de Segregación General (basado en los 6 campos individuales)
    let totalVerificaciones = 0;
    let verificacionesCorrectas = 0;

    this.registros.forEach(registro => {
      totalVerificaciones += 6;
      if (registro.plasticoSegregado) verificacionesCorrectas++;
      if (registro.papelCartonSegregado) verificacionesCorrectas++;
      if (registro.vidrioSegregado) verificacionesCorrectas++;
      if (registro.metalSegregado) verificacionesCorrectas++;
      if (registro.organicoSegregado) verificacionesCorrectas++;
      if (registro.noAprovechableSegregado) verificacionesCorrectas++;
    });

    this.metrics.tasaSegregacion = (verificacionesCorrectas / totalVerificaciones) * 100;

    // 2. Calcular peor y mejor sede
    const sedeStats = new Map<string, { correctos: number; total: number }>();
    this.registros.forEach(reg => {
      const sedeName = reg.user?.sede?.nombre || 'Sin sede';
      if (!sedeStats.has(sedeName)) {
        sedeStats.set(sedeName, { correctos: 0, total: 0 });
      }
      const stats = sedeStats.get(sedeName)!;
      stats.total++;
      if (reg.segregacionCorrecta) stats.correctos++;
    });

    let peorSede: { nombre: string; tasa: number } | null = null;
    let mejorSede: { nombre: string; tasa: number } | null = null;
    sedeStats.forEach((stats, nombre) => {
      const tasa = (stats.correctos / stats.total) * 100;
      if (!peorSede || tasa < peorSede.tasa) {
        peorSede = { nombre, tasa };
      }
      if (!mejorSede || tasa > mejorSede.tasa) {
        mejorSede = { nombre, tasa };
      }
    });
    this.metrics.peorSede = peorSede;
    this.metrics.mejorSede = mejorSede;

    // 3. Calcular peor y mejor edificio
    const edificioStats = new Map<string, { correctos: number; total: number; sede: string }>();
    this.registros.forEach(reg => {
      const edificioName = reg.user?.edificio?.nombre || 'Sin edificio';
      const sedeName = reg.user?.sede?.nombre || 'Sin sede';
      const key = `${edificioName}|${sedeName}`;

      if (!edificioStats.has(key)) {
        edificioStats.set(key, { correctos: 0, total: 0, sede: sedeName });
      }
      const stats = edificioStats.get(key)!;
      stats.total++;
      if (reg.segregacionCorrecta) stats.correctos++;
    });

    let peorEdificio: { nombre: string; sede: string; tasa: number } | null = null;
    let mejorEdificio: { nombre: string; sede: string; tasa: number } | null = null;
    edificioStats.forEach((stats, key) => {
      const [nombre] = key.split('|');
      const tasa = (stats.correctos / stats.total) * 100;
      if (!peorEdificio || tasa < peorEdificio.tasa) {
        peorEdificio = { nombre, sede: stats.sede, tasa };
      }
      if (!mejorEdificio || tasa > mejorEdificio.tasa) {
        mejorEdificio = { nombre, sede: stats.sede, tasa };
      }
    });
    this.metrics.peorEdificio = peorEdificio;
    this.metrics.mejorEdificio = mejorEdificio;

    // 4. Total Verificaciones (Hoy)
    if (this.currentDate) {
      const hoy = new Date(this.currentDate).toDateString();
      this.metrics.totalVerificacionesHoy = this.registros.filter(reg => {
        return new Date(reg.fechaVerificacion).toDateString() === hoy;
      }).length;
    } else {
      this.metrics.totalVerificacionesHoy = 0;
    }
  }
}
