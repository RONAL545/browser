// ============================================
// User Interface - Interfaz principal de usuario
// ============================================
export interface User {
  id: string;
  nombres: string;
  apellidos: string;
  identifier: string;
  identifierType: 'email' | 'dni';
  telefono?: string | null;

  // IDs de relaciones
  roleId?: string;
  sedeId?: string | null;
  edificioId?: string | null;

  // Propiedades pobladas por relaciones (cuando se incluyen en la respuesta)
  role?: string | { id: string; nombre: string };
  sede?: {
    id: string;
    nombre: string;
  } | null;
  edificio?: {
    id: string;
    nombre: string;
    sedeId?: string;
    sede?: { id: string; nombre: string };
  } | null;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;
}

// ============================================
// Authentication Interfaces
// ============================================
export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
  // refresh_token se envía como HttpOnly cookie, no en la respuesta JSON
}

export interface RefreshTokenResponse {
  access_token: string;
  // refresh_token se envía como HttpOnly cookie, no en la respuesta JSON
}

// ============================================
// User Management DTOs
// ============================================
export interface CreateUserDto {
  nombres: string;
  apellidos: string;
  identifier: string;
  identifierType: 'email' | 'dni';
  clave: string;
  roleId: string;
  sedeId?: string;
  edificioId?: string;
  telefono?: string;
}

export interface UpdateUserDto {
  nombres?: string;
  apellidos?: string;
  identifier?: string;
  identifierType?: 'email' | 'dni';
  roleId?: string;
  sedeId?: string;
  edificioId?: string;
  telefono?: string;
  clave?: string;
}

// ============================================
// Paginated Response
// ============================================
export interface UserResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ============================================
// Password Management
// ============================================
export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface ResetPasswordDto {
  clave: string;
}
