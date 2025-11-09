import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

export interface Sede {
  id: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl = `${environment.apiUrl}/sedes`;

  constructor(private http: HttpClient) {}

  getSedes(): Observable<Sede[]> {
    return this.http.get<Sede[]>(this.apiUrl);
  }
}
