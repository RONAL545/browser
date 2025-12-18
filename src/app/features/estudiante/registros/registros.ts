import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

// PrimeNG Imports
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Components
import { RegistrosHeroComponent } from './components/registros-hero/registros-hero.component';

interface Registro {
  id: string;
  fechaRegistro: string;
  edificio: {
    nombre: string;
  };
  codigoPila: string;
  observaciones?: string;
  segregacionCorrecta: boolean;
  residuos: string[];
  // Estados de segregación por tipo
  plasticoSegregado?: boolean;
  organicoSegregado?: boolean;
  vidrioSegregado?: boolean;
  metalSegregado?: boolean;
  papelCartonSegregado?: boolean;
  noAprovechableSegregado?: boolean;
}

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    TagModule,
    ProgressSpinnerModule,
    RegistrosHeroComponent
  ],
  templateUrl: './registros.html',
  styleUrl: './registros.scss',
})
export class RegistrosComponent implements OnInit {
  registros: Registro[] = [];
  loading = true;
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRegistros();
  }

  loadRegistros(): void {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Registro[]>(`${this.apiUrl}/registros/estudiante/historial`, { headers })
      .subscribe({
        next: (registros) => {
          this.registros = registros;
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        }
      });
  }

  volver(): void {
    this.router.navigate(['/app/estudiante/dashboard']);
  }

  // Contar cuántos residuos fueron segregados correctamente (true)
  getConteoCorrectos(registro: Registro): number {
    let conteo = 0;

    const tiposResiduos = [
      registro.papelCartonSegregado,
      registro.plasticoSegregado,
      registro.metalSegregado,
      registro.organicoSegregado,
      registro.vidrioSegregado,
      registro.noAprovechableSegregado
    ];

    tiposResiduos.forEach(campo => {
      if (campo === true) {
        conteo++;
      }
    });

    return conteo;
  }

  // Contar cuántos residuos fueron segregados incorrectamente (false)
  getConteoIncorrectos(registro: Registro): number {
    let conteo = 0;

    const tiposResiduos = [
      registro.papelCartonSegregado,
      registro.plasticoSegregado,
      registro.metalSegregado,
      registro.organicoSegregado,
      registro.vidrioSegregado,
      registro.noAprovechableSegregado
    ];

    tiposResiduos.forEach(campo => {
      if (campo === false) {
        conteo++;
      }
    });

    return conteo;
  }

}
