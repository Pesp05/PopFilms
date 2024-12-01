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
    return this.http.get<ListaPeliculasResponse>(`${environment.apiBaseUrl}/account/${cuentaID}/rated/movies`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
      },
    });
  }

  getSeriesValoradas(cuentaID: number): Observable<ListaSeries> {
    return this.http.get<ListaSeries>(`${environment.apiBaseUrl}/account/${cuentaID}/rated/tv`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
      },
    });
  }
}