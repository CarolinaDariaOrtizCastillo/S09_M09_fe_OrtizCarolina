// pelicula.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PeliculaService {
  private URL = 'http://localhost:8080/peliculas'; // La URL de tu Spring Boot

  constructor(private http: HttpClient) {}

  getAll() { return this.http.get(this.URL); }
  create(p: any) { return this.http.post(this.URL, p); }
  update(id: number, p: any) { return this.http.put(`${this.URL}/${id}`, p); }
  delete(id: number) { return this.http.delete(`${this.URL}/${id}`); }
}