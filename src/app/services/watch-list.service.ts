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
const ACCOUNT_ID = localStorage.getItem('account_id');

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

  addToWatchList(mediaId: number, mediaType: string, watchList: boolean): void{
    const body = {
      media_type: mediaType,
      media_id: mediaId,
      watchList: watchList
    };
    
   
    this.http.post(`${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist`, body).subscribe((response) =>{
      console.log('Añadida a watchlist', response);
    },
  error => {
      console.log('Error al añadir a watchlist', error)
  })
  }

  removeMovieToWatchList(peliculaId:number):Observable<any>{
    const url = `${API_BASE_URL}/account/{${ACCOUNT_ID}}/watchlist/movies/${peliculaId}`;
    return this.http.delete(url, HEADERS);

  }

  removeSerieToWatchList(serieId:number):Observable<any>{
    const url = `${API_BASE_URL}/account/{${ACCOUNT_ID}}/watchlist/tv/${serieId}`;
    return this.http.delete(url, HEADERS)
  }
}
