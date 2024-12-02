import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePelicula, ListaPeliculasResponse, Pelicula } from '../models/lista-peliculas-response.interface';
import { PeliculasVideosResponse } from '../models/peliculas-videos-response.interface';
import { CreditosPeliResponse } from '../models/creditos-peliculas.interface';
import { environment } from '../../environments/environment';

const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI'
  }
};
const HEADERSANDPOST = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
};
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {}

  public obtenerPeliculasPopulares(page: number):Observable<ListaPeliculasResponse>{
    const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<ListaPeliculasResponse>(`${environment.apiBaseUrl}/movie/popular?&language=${IDIOMA}&page=${page}`, HEADERS);
  }

  public obtenerPeliculasPorFiltros(sortBy: string, genres: string, releaseDateMin: string, releaseDateMax: string, runtimeMin: string, runtimeMax: string, rateMin: string, rateMax: string): Observable<ListaPeliculasResponse> {
    return this.http.get<ListaPeliculasResponse>(`${environment.apiBaseUrl}/discover/movie?sort_by=${sortBy}&with_genres=${genres}&primary_release_date.gte=${releaseDateMin}&primary_release_date.lte=${releaseDateMax}&with_runtime.gte=${runtimeMin}&with_runtime.lte=${runtimeMax}&vote_average.gte=${rateMin}&vote_average.lte=${rateMax}`, HEADERS);
  }

  public getImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    return `${baseUrl}${fileSize}${posterPath}`;
  }

  public obtenerTrailerPorId(idPeli:number):Observable<PeliculasVideosResponse>{
    return this.http.get<PeliculasVideosResponse>(`${environment.apiBaseUrl}/movie/${idPeli}/videos`,HEADERS)
  }


  getDetallePeli(idPeli: number): Observable<DetallePelicula> {
    const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<DetallePelicula>(`${environment.apiBaseUrl}/movie/${idPeli}?language=${IDIOMA}`, HEADERS);
  }

  getCreditosPeli(idMovie: number): Observable<CreditosPeliResponse> {
    const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<CreditosPeliResponse>(`${environment.apiBaseUrl}/movie/${idMovie}/credits?&language=${IDIOMA}`, HEADERS);

  }

  public aplicarFiltros(languageFilter: string) {
    throw new Error('Method not implemented.');
  }

  public setRatingPeli(idPeli: number, rating: number): Observable<void> {

    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.post<void>(`${environment.apiBaseUrl}/movie/${idPeli}/rating?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, { value: rating }, HEADERSANDPOST);
  }
  public deleteRatingPeli(idPeli: number): Observable<void> {
    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.delete<void>(`${environment.apiBaseUrl}/movie/${idPeli}/rating?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, HEADERSANDPOST);
  }
}
