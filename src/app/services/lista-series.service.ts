import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaSeries } from '../models/lista-series.interface';
import { SerieVideosResponse } from '../models/serie-videos.interface';
import { DetalleSerieResponse } from '../models/detalle-serie.interfaces';
import { CreditosSerieResponse } from '../models/creditos-serie.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaSeriesService {

  constructor(private http: HttpClient) {}

  getPopularWithHeader(): Observable<ListaSeries> {
    return this.http.get<ListaSeries>(`https://api.themoviedb.org/3/tv/popular?&language=es-ES`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
      },
    });
  }
  getSerieVideo(idSerie: number): Observable<SerieVideosResponse> {
    return this.http.get<SerieVideosResponse>(`https://api.themoviedb.org/3/tv/${idSerie}/videos`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
      },
    });
  }

  getDetalleSerie(idSerie: number): Observable<DetalleSerieResponse> {
    return this.http.get<DetalleSerieResponse>(`https://api.themoviedb.org/3/tv/${idSerie}`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
      },
    });
  }
  getCreditosSerie(idSerie: number): Observable<CreditosSerieResponse> {
    return this.http.get<CreditosSerieResponse>(`https://api.themoviedb.org/3/tv/${idSerie}/credits`, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5Mjg1OTczM2FmM2E4MjMwMzQxYjM1MGE1OTVmZCIsIm5iZiI6MTczMTc1MjA2MC44MTk0MjU2LCJzdWIiOiI2NzMxYmQ5NjYxNjI2YWMxMDZiZTY3ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59a-DzPdbcfNJ8mWyRnkG_yFZ5DkQQCL4IsR3q_X30M'}`,
      },
    });
  }
}
