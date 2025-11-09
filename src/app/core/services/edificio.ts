import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Edificio {
  id: string;
  nombre: string;
  sedeId: string;
  sede?: {
    id: string;
    nombre: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateEdificioDto {
  nombre: string;
  sedeId: string;
}

export interface UpdateEdificioDto {
  nombre?: string;
  sedeId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = `${environment.apiUrl}/edificios`;

  constructor(private http: HttpClient) {}

  getAll(sedeId?: string): Observable<Edificio[]> {
    let params = new HttpParams();
    if (sedeId) {
      params = params.set('sedeId', sedeId);
    }
    return this.http.get<Edificio[]>(this.apiUrl, { params });
  }

  getEdificios(sedeId?: string): Observable<Edificio[]> {
    return this.getAll(sedeId);
  }

  getOne(id: string): Observable<Edificio> {
    return this.http.get<Edificio>(`${this.apiUrl}/${id}`);
  }

  create(createEdificioDto: CreateEdificioDto): Observable<Edificio> {
    return this.http.post<Edificio>(this.apiUrl, createEdificioDto);
  }

  update(id: string, updateEdificioDto: UpdateEdificioDto): Observable<Edificio> {
    return this.http.patch<Edificio>(`${this.apiUrl}/${id}`, updateEdificioDto);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
