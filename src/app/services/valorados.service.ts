import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaPeliculasResponse } from '../models/lista-peliculas-response.interface';
import { Observable } from 'rxjs';
import { ListaSeries } from '../models/lista-series.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ValoradosService {

  constructor(private http: HttpClient) {}

  getPeliculasValoradas(cuentaID: number): Observable<ListaPeliculasResponse> {
    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.get<ListaPeliculasResponse>(`${environment.apiBaseUrl}/account/${cuentaID}/rated/movies?api_key=${environment.apiKey}&session_id=${SESSION_ID}`);
  }

  getSeriesValoradas(cuentaID: number): Observable<ListaSeries> {
    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.get<ListaSeries>(`${environment.apiBaseUrl}/account/${cuentaID}/rated/tv?api_key=${environment.apiKey}&session_id=${SESSION_ID}`);
  
  }
}

