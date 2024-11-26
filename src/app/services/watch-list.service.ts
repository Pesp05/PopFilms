import { Injectable } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { AccountService } from './authentication/account.service';
import { HttpClient } from '@angular/common/http';
import { ListaPeliculasResponse } from '../models/lista-peliculas-response.interface';
import { ListaSeries } from '../models/lista-series.interface';
import { Observable } from 'rxjs';

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
export class WatchListService {

  accountId: string | null = null;


  constructor(private account: AccountService, private http:HttpClient) { }

  getMoviesWatchList():Observable<ListaPeliculasResponse>{
    this.accountId = localStorage.getItem('account_id');
    return this.http.get<ListaPeliculasResponse>(`${API_BASE_URL}/account/${this.accountId}/watchlist/movies`,HEADERS)

  }

  getTvWatchList():Observable<ListaSeries>{
    this.accountId = localStorage.getItem('account_id');
    return this.http.get<ListaSeries>(`${API_BASE_URL}/account/${this.accountId}/watchlist/tv`,HEADERS)

  }

  addToWatchList(mediaId: number, mediaType: string, watchList: boolean): void{
    this.accountId = localStorage.getItem('account_id');
    const body = {
      media_type: mediaType,
      media_id: mediaId,
      watchList: watchList
    };
    this.http.post(`${API_BASE_URL}/account/${this.accountId}/watchlist`, body).subscribe((response) =>{
      console.log('Añadida a watchlist', response);
    },
  error => {
      console.log('Error al añadir a watchlist', error)
  })
  }
}
