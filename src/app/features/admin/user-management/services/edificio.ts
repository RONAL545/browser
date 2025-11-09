import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

export interface Edificio {
  id: string;
  nombre: string;
  sedeId: string;
}

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = `${environment.apiUrl}/edificios`;

  constructor(private http: HttpClient) {}

  getEdificios(sedeId?: string): Observable<Edificio[]> {
    let params = new HttpParams();
    if (sedeId) {
      params = params.set('sedeId', sedeId);
    }
    return this.http.get<Edificio[]>(this.apiUrl, { params });
  }
}
