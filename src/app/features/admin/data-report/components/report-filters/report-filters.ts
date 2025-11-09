import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { ReportFilters } from '../../services/report';

interface Sede {
  id: string;
  nombre: string;
}

interface Edificio {
  id: string;
  nombre: string;
  sedeId: string;
}

@Component({
  selector: 'app-report-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePicker, Select],
  templateUrl: './report-filters.html',
  styleUrl: './report-filters.scss',
})
export class ReportFiltersComponent implements OnInit {
  @Output() filterChange = new EventEmitter<ReportFilters>();
  @Output() exportClick = new EventEmitter<void>();

  startDate: Date | null = null;
  endDate: Date | null = null;
  selectedSede: Sede | null = null;
  selectedEdificio: Edificio | null = null;

  sedes: Sede[] = [];
  edificios: Edificio[] = [];
  edificiosFiltrados: Edificio[] = [];

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSedes();
    this.loadEdificios();
    this.onFilter();
  }

  loadSedes(): void {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Sede[]>(`${this.apiUrl}/sedes`, { headers })
      .subscribe({
        next: (sedes) => {
          this.sedes = sedes;
        },
        error: (error) => {
          console.error('Error al cargar sedes:', error);
        }
      });
  }

  loadEdificios(): void {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Edificio[]>(`${this.apiUrl}/edificios`, { headers })
      .subscribe({
        next: (edificios) => {
          this.edificios = edificios;
          this.edificiosFiltrados = edificios;
        },
        error: (error) => {
          console.error('Error al cargar edificios:', error);
        }
      });
  }

  onSedeChange(): void {
    if (this.selectedSede) {
      this.edificiosFiltrados = this.edificios.filter(
        edificio => edificio.sedeId === this.selectedSede!.id
      );
      this.selectedEdificio = null;
    } else {
      this.edificiosFiltrados = this.edificios;
    }
  }

  onFilter() {
    const filters: ReportFilters = {
      startDate: this.startDate ? this.startDate.toISOString().split('T')[0] : undefined,
      endDate: this.endDate ? this.endDate.toISOString().split('T')[0] : undefined,
      sedeId: this.selectedSede?.id,
      edificioId: this.selectedEdificio?.id,
    };
    this.filterChange.emit(filters);
  }

  onClear() {
    this.startDate = null;
    this.endDate = null;
    this.selectedSede = null;
    this.selectedEdificio = null;
    this.edificiosFiltrados = this.edificios;
    this.onFilter();
  }

  onExport() {
    this.exportClick.emit();
  }
}
