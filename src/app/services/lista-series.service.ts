import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaSeries } from '../models/lista-series.interface';
import { SerieVideosResponse } from '../models/serie-videos.interface';
import { DetalleSerieResponse } from '../models/detalle-serie.interfaces';
import { CreditosSerieResponse } from '../models/creditos-serie.interface';
import { environment } from '../../environments/environment';

const API_KEY = '4c92ea126ceabbca4fbdaa0e7e3696ca';
const HEADERSANDPOST = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}
const HEADER = { headers: {
  Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
},
};
@Injectable({
  providedIn: 'root'
})
export class ListaSeriesService {

  constructor(private http: HttpClient) {}

  getPopularWithHeader(): Observable<ListaSeries> {
    return this.http.get<ListaSeries>(`https://api.themoviedb.org/3/tv/popular?&language=es-ES`, HEADER);
  }
  getSerieVideo(idSerie: number): Observable<SerieVideosResponse> {
    return this.http.get<SerieVideosResponse>(`https://api.themoviedb.org/3/tv/${idSerie}/videos`, HEADER);
  }

  getDetalleSerie(idSerie: number): Observable<DetalleSerieResponse> {
    return this.http.get<DetalleSerieResponse>(`https://api.themoviedb.org/3/tv/${idSerie}`, HEADER);
  }
  getCreditosSerie(idSerie: number): Observable<CreditosSerieResponse> {
    return this.http.get<CreditosSerieResponse>(`https://api.themoviedb.org/3/tv/${idSerie}/credits`, HEADER);
  }
  setRatingSerie(idSerie: number, rating: number): Observable<void> {

    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.post<void>(`${environment.apiBaseUrl}/tv/${idSerie}/rating?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, { value: rating }, HEADERSANDPOST);
  }
  deleteRatingSerie(idSerie: number): Observable<void> {
    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.delete<void>(`${environment.apiBaseUrl}/tv/${idSerie}/rating?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, HEADERSANDPOST);
  }
}
