import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopMoviesListResponse } from '../models/top-movie-list.interface';
import { ListaPersonas } from '../models/lista-personas.interfaces';
import { TopSeriesListResponse } from '../models/top-serie-list.interface';

const API_BASE_URL = 'https://api.themoviedb.org/3';
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
    return this.http.get<TopMoviesListResponse>(`${API_BASE_URL}/movie/top_rated?&language=es-ES`, HEADERS);
  }

  getTopSeriesList(): Observable<TopSeriesListResponse> {
    return this.http.get<TopSeriesListResponse>(`${API_BASE_URL}/tv/top_rated?&language=es-ES`, HEADERS);
  }

  getPeopleList(): Observable<ListaPersonas>{
    return this.http.get<ListaPersonas>(`${API_BASE_URL}/person/popular?&language=es-ES`, HEADERS);
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
