import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusquedaResponse } from '../models/busqueda-response.interface';
import { Observable } from 'rxjs';

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
export class BusquedaService {
  public getImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const fileSize = 'w500';
    return `${baseUrl}${fileSize}${posterPath}`;
  }

  constructor(private http: HttpClient) { }

  getBusqueda(busqueda: string): Observable<BusquedaResponse> {
    return this.http.get<BusquedaResponse>(`${API_BASE_URL}/search/multi?query=${busqueda}&language=es-ES`, HEADERS);
  }
}
