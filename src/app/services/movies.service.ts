import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePelicula, ListaPeliculasResponse, Pelicula } from '../models/lista-peliculas-response.interface';
import { PeliculasVideosResponse } from '../models/peliculas-videos-response.interface';


const API_BASE_URL = 'https://api.themoviedb.org/3';
const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI'
  }
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {}

  public obtenerPeliculasPopulares():Observable<ListaPeliculasResponse>{
    return this.http.get<ListaPeliculasResponse>(`${API_BASE_URL}/movie/popular?&language=es-ES`, HEADERS);
  }

  public getImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    return `${baseUrl}${fileSize}${posterPath}`;
  }


  public obtenerDetallePeliPorId(id:number):Observable<Pelicula>{
    return this.http.get<Pelicula>(``, HEADERS);
  }

  public obtenerTrailerPorId(idPeli:number):Observable<PeliculasVideosResponse>{
    return this.http.get<PeliculasVideosResponse>(`${API_BASE_URL}/movie/${idPeli}/videos`,HEADERS)
  }

  getDetallePeli(idPeli: number): Observable<DetallePelicula> {
    return this.http.get<DetallePelicula>(`https://api.themoviedb.org/3/movie/${idPeli}?language=es-ES`, HEADERS);
  }
}
