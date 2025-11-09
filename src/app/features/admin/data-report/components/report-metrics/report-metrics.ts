import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { RegistroPersonal } from '../../services/report';

interface MetricCard {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-report-metrics',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './report-metrics.html',
  styleUrl: './report-metrics.scss',
})
export class ReportMetricsComponent implements OnChanges {
  @Input() registros: RegistroPersonal[] = [];

  metrics: MetricCard[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registros'] && this.registros) {
      this.calculateMetrics();
    }
  }

  calculateMetrics(): void {
    // 1. Total Registros
    const totalRegistros = this.registros.length;

    // 2. Total Reciclados (KG) - excluye no aprovechables
    let totalReciclados = 0;

    // 3. Total No Aprovechable (KG)
    let totalNoAprovechable = 0;

    // Para calcular el más reciclado, agrupamos por categoría
    let plasticoTotal = 0;
    let papelCartonTotal = 0;
    let vidrioTotal = 0;
    let organicoTotal = 0;
    let metalTotal = 0;

    this.registros.forEach((registro) => {
      // Convertir valores a números
      const plasticos = Number(registro.plasticosKg) || 0;
      const organicos = Number(registro.organicosKg) || 0;
      const vidrio = Number(registro.vidrioKg) || 0;
      const metales = Number(registro.metalesKg) || 0;
      const papelCarton = Number(registro.papelCartonKg) || 0;
      const botellas = Number(registro.botellasKg) || 0;
      const papelOficina = Number(registro.papelOficinaKg) || 0;
      const noAprovechables = Number(registro.noAprovechablesKg) || 0;

      // Sumar reciclables
      totalReciclados += plasticos + organicos + vidrio + metales +
                        papelCarton + botellas + papelOficina;

      // Sumar no aprovechables
      totalNoAprovechable += noAprovechables;

      // Agrupar por categorías para "más reciclado"
      plasticoTotal += plasticos + botellas;
      papelCartonTotal += papelCarton + papelOficina;
      vidrioTotal += vidrio;
      organicoTotal += organicos;
      metalTotal += metales;
    });

    // 4. Más Reciclado - encontrar la categoría con más KG
    const categorias = [
      { nombre: 'Plásticos', kg: plasticoTotal },
      { nombre: 'Papel/Cartón', kg: papelCartonTotal },
      { nombre: 'Vidrio', kg: vidrioTotal },
      { nombre: 'Orgánicos', kg: organicoTotal },
      { nombre: 'Metales', kg: metalTotal },
    ];

    const masReciclado = categorias.reduce((max, cat) =>
      cat.kg > max.kg ? cat : max
    , categorias[0]);

    // Total de kilos
    const totalKilos = totalReciclados + totalNoAprovechable;

    // Crear las tarjetas de métricas
    this.metrics = [
      {
        title: 'Total Registros',
        value: totalRegistros.toString(),
        subtitle: 'Formularios enviados',
        icon: 'pi pi-file',
        color: '#3b82f6', // blue
      },
      {
        title: 'Total Residuos',
        value: `${totalKilos.toFixed(2)} kg`,
        subtitle: 'Total de todos los residuos',
        icon: 'pi pi-box',
        color: '#6366f1', // indigo
      },
      {
        title: 'Total Reciclados',
        value: `${totalReciclados.toFixed(2)} kg`,
        subtitle: 'Material aprovechable',
        icon: 'pi pi-recycle',
        color: '#10b981', // green
      },
      {
        title: 'Total No Aprovechable',
        value: `${totalNoAprovechable.toFixed(2)} kg`,
        subtitle: 'Material no reciclable',
        icon: 'pi pi-trash',
        color: '#ef4444', // red
      },
      {
        title: 'Más Reciclado',
        value: masReciclado.nombre,
        subtitle: `${masReciclado.kg.toFixed(2)} kg`,
        icon: 'pi pi-star',
        color: '#f59e0b', // amber
      },
    ];
  }
}
