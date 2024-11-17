import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaPersonas } from '../models/lista-personas.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonasService {

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<ListaPersonas> {
    return this.http.get<ListaPersonas>(`https://api.themoviedb.org/3/person/popular?&language=es-ES`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDA1NzdlOGNkMmUyYjU0OWY5NDYxOTU0NTBmZDQ5YiIsIm5iZiI6MTczMTg2NTU0OS45MDU4MzA0LCJzdWIiOiI2NzMxYmYzNjdlZjJjMzFkNzhlZGFjNGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EDrGv4SuXDqQRkvgTCjqk3GVvAA0zIMTf7CRDK5863w'}`,
      },
    });
  }

getpersonasId(id: number): Observable<ListaPersonas> {
    return this.http.get<ListaPersonas>(`https://api.themoviedb.org/3/person/${id}?&language=es-ES`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDA1NzdlOGNkMmUyYjU0OWY5NDYxOTU0NTBmZDQ5YiIsIm5iZiI6MTczMTg2NTU0OS45MDU4MzA0LCJzdWIiOiI2NzMxYmYzNjdlZjJjMzFkNzhlZGFjNGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EDrGv4SuXDqQRkvgTCjqk3GVvAA0zIMTf7CRDK5863w'}`,
      },
    });
  }



}
