import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse, User, RefreshTokenResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'current_user';

  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  /**
   * Realiza el login del usuario
   * El refresh token se envía automáticamente como HttpOnly cookie desde el backend
   */
  login(credentials: LoginRequest): Observable<LoginResponse> {
    console.log('AUTH SERVICE - Enviando login request:', credentials);
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/auth/login`,
      credentials,
      { withCredentials: true } // Necesario para recibir cookies
    ).pipe(
      tap(response => {
        console.log('AUTH SERVICE - Respuesta del servidor:', response);
        console.log('AUTH SERVICE - Access token:', response.access_token);
        console.log('AUTH SERVICE - User:', response.user);
        this.setToken(response.access_token);
        this.setUser(response.user);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  /**
   * Refresca el access token usando el refresh token (cookie HttpOnly)
   * La cookie se envía automáticamente con withCredentials: true
   */
  refreshToken(): Observable<RefreshTokenResponse> {
    return this.http.post<RefreshTokenResponse>(
      `${environment.apiUrl}/auth/refresh`,
      {}, // Body vacío, el refresh token viene en la cookie
      { withCredentials: true } // Envía automáticamente la cookie
    ).pipe(
      tap(response => {
        this.setToken(response.access_token);
      })
    );
  }

  /**
   * Cierra la sesión del usuario
   * El backend limpiará la cookie HttpOnly automáticamente
   */
  logout(): void {
    const token = this.getToken();
    if (token) {
      this.http.post(
        `${environment.apiUrl}/auth/logout`,
        {},
        { withCredentials: true } // Envía la cookie para que el backend la limpie
      ).subscribe({
        next: () => {
          this.clearAuthData();
        },
        error: () => {
          // Incluso si falla, limpiamos los datos locales
          this.clearAuthData();
        }
      });
    } else {
      this.clearAuthData();
    }
  }

  /**
   * Limpia todos los datos de autenticación
   */
  private clearAuthData(): void {
    this.removeToken();
    this.removeUser();
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  /**
   * Verifica si el usuario está autenticado
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Obtiene el token del localStorage
   */
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  /**
   * Obtiene el usuario actual
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Guarda el token en localStorage
   */
  private setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  /**
   * Guarda el usuario en localStorage
   */
  private setUser(user: User): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  /**
   * Elimina el token del localStorage
   */
  private removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  /**
   * Elimina el usuario del localStorage
   */
  private removeUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.USER_KEY);
    }
  }

  /**
   * Obtiene el usuario del localStorage
   */
  private getUserFromStorage(): User | null {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem(this.USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  }
}
