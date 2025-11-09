import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pila, CreatePilaDto, UpdatePilaDto } from '../models/pila.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PilaService {
  private apiUrl = `${environment.apiUrl}/pilas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pila[]> {
    return this.http.get<Pila[]>(this.apiUrl);
  }

  getOne(id: string): Observable<Pila> {
    return this.http.get<Pila>(`${this.apiUrl}/${id}`);
  }

  create(pila: CreatePilaDto): Observable<Pila> {
    return this.http.post<Pila>(this.apiUrl, pila);
  }

  update(id: string, pila: UpdatePilaDto): Observable<Pila> {
    return this.http.patch<Pila>(`${this.apiUrl}/${id}`, pila);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
