import { Injectable } from '@angular/core';
import { AccountService } from './authentication/account.service';
import { HttpClient } from '@angular/common/http';
import { ListaPeliculasResponse } from '../models/lista-peliculas-response.interface';
import { ListaSeries } from '../models/lista-series.interface';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI';
const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI'
  }
};
const ACCOUNT_ID = parseInt(localStorage.getItem('account_id') ?? '0', 10);

@Injectable({
  providedIn: 'root'
})
export class WatchListService {


  constructor(private account: AccountService, private http:HttpClient) { }

  getMoviesWatchList():Observable<ListaPeliculasResponse>{
    return this.http.get<ListaPeliculasResponse>(`${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist/movies`,HEADERS)

  }

  getTvWatchList():Observable<ListaSeries>{
    return this.http.get<ListaSeries>(`${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist/tv`,HEADERS)

  }

  addToWatchList(mediaId: number, mediaType: string, watchList: boolean): void {
    const url = `${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist`;
    const headers = {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = {
      media_type: mediaType,
      media_id: mediaId,
      watchlist: true
    };
    this.http.post(url, body, HEADERS).subscribe();  
  }

  removeMovieToWatchList(peliculaId:number):Observable<any>{
    const url = `${API_BASE_URL}/account/{${ACCOUNT_ID}}/watchlist`;
    const body = {
      media_type: 'movie',
      media_id: peliculaId,
      watchlist: false
    }
    
     return this.http.post<any>(url, body, HEADERS);

  }

  removeSerieToWatchList(serieId:number):Observable<any>{
    const url = `${API_BASE_URL}/account/{${ACCOUNT_ID}}/watchlist`;
    const body = {
      media_type: 'tv',
      media_id: serieId,
      watchlist: false
    }
    return this.http.post<any>(url,body,HEADERS)
  }
}
