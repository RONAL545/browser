export interface Pila {
  id: string;
  codigo: string;
  edificioId: string;
  edificio?: {
    id: string;
    nombre: string;
    sede?: {
      id: string;
      nombre: string;
    };
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreatePilaDto {
  codigo: string;
  edificioId: string;
}

export interface UpdatePilaDto {
  codigo?: string;
  edificioId?: string;
}
