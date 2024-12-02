import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopMoviesListResponse } from '../models/top-movie-list.interface';
import { ListaPersonas } from '../models/lista-personas.interfaces';
import { TopSeriesListResponse } from '../models/top-serie-list.interface';
import { environment } from '../../environments/environment';

const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgwYWRmMTdkNmVmN2UxZjI3ZmZlYmNkNjYyMzVjZiIsIm5iZiI6MTczMjAwODgyNC45NzgxOTMsInN1YiI6IjY3MzFiZGZkYjZhMmE5ZjE0YTJiN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPqSAxVYi31-2EBAZXoXIU1pCznAQQIX0-rAvddUV4M'
  }
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getTopMoviesList(): Observable<TopMoviesListResponse> {
    const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<TopMoviesListResponse>(`${environment.apiBaseUrl}/movie/top_rated?&language=${IDIOMA}`, HEADERS);
  }

  getTopSeriesList(): Observable<TopSeriesListResponse> {
    const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<TopSeriesListResponse>(`${environment.apiBaseUrl}/tv/top_rated?&language=${IDIOMA}`, HEADERS);
  }

  getPeopleList(): Observable<ListaPersonas> {
    const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<ListaPersonas>(`${environment.apiBaseUrl}/person/popular?&language=${IDIOMA}`, HEADERS);
  }

  public getMovieImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    return `${baseUrl}${fileSize}${posterPath}`;
  }

  public getSerieImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/s/';
    const fileSize = 'w500';
    return `${baseUrl}${fileSize}${posterPath}`;
  }

}