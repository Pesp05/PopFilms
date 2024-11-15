import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPeliculasResponse } from '../models/lista-peliculas-response.interface';


const API_BASE_URL = 'https://api.themoviedb.org/3';
const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI'
  }
};

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movieUrl = 'movie';

  constructor(private http:HttpClient) {}

  public obtenerPeliculasPopulares():Observable<ListaPeliculasResponse>{
    return this.http.get<ListaPeliculasResponse>(`${API_BASE_URL}/${this.movieUrl}/popular`, HEADERS);
  }
}
