import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaSeries } from '../models/lista-series.interface';
import { SerieVideosResponse } from '../models/serie-videos.interface';
import { DetalleSerieResponse } from '../models/detalle-serie.interfaces';
import { CreditosSerieResponse } from '../models/creditos-serie.interface';
import { environment } from '../../environments/environment';

<<<<<<< HEAD
const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI'
  }
};

=======
const HEADERSANDPOST = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}
const HEADER = { headers: {
  Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
},
};
>>>>>>> main
@Injectable({
  providedIn: 'root'
})
export class ListaSeriesService {

  constructor(private http: HttpClient) {}

  getPopularWithHeader(page: number): Observable<ListaSeries> {
    return this.http.get<ListaSeries>(`${environment.apiBaseUrl}/tv/popular?&language=es-ES&page=${page}`, HEADER);
  }

  public obtenerSeriesPorFiltros(languageFilter: string, sortBy: string, genres: string, releaseDateMin: string, releaseDateMax: string, rateMin: string, rateMax: string): Observable<ListaSeries> {
    return this.http.get<ListaSeries>(`https://api.themoviedb.org/3/discover/tv?&language=${languageFilter}&sort_by=${sortBy}&with_genres=${genres}&primary_release_date.gte=${releaseDateMin}&primary_release_date.lte=${releaseDateMax}&vote_average.gte=${rateMin}&vote_average.lte=${rateMax}`, HEADERS);
  }

  getSerieVideo(idSerie: number): Observable<SerieVideosResponse> {
    return this.http.get<SerieVideosResponse>(`${environment.apiBaseUrl}/tv/${idSerie}/videos`, HEADER);
  }

  getDetalleSerie(idSerie: number): Observable<DetalleSerieResponse> {
    return this.http.get<DetalleSerieResponse>(`${environment.apiBaseUrl}/tv/${idSerie}`, HEADER);
  }
  getCreditosSerie(idSerie: number): Observable<CreditosSerieResponse> {
    return this.http.get<CreditosSerieResponse>(`${environment.apiBaseUrl}/tv/${idSerie}/credits`, HEADER);
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