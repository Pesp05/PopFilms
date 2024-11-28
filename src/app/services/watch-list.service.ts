import { Injectable } from '@angular/core';
import { AccountService } from './authentication/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaPeliculasResponse } from '../models/lista-peliculas-response.interface';
import { ListaSeries } from '../models/lista-series.interface';
import { Observable } from 'rxjs';

const API_KEY = '4c92ea126ceabbca4fbdaa0e7e3696ca';
const SESSION_ID = localStorage.getItem('session_id');
const API_BASE_URL = 'https://api.themoviedb.org/3';
const ACCOUNT_ID = parseInt(localStorage.getItem('account_id') ?? '0', 10);


@Injectable({
  providedIn: 'root'
})
export class WatchListService {


  constructor(private account: AccountService, private http:HttpClient) { }

  getMoviesWatchList():Observable<ListaPeliculasResponse>{
    return this.http.get<ListaPeliculasResponse>(`${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist/movies?api_key=${API_KEY}&session_id=${SESSION_ID}`)

  }

  getTvWatchList():Observable<ListaSeries>{
    return this.http.get<ListaSeries>(`${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist/tv?api_key=${API_KEY}&session_id=${SESSION_ID}`)

  }

  addToWatchList(mediaId: number, mediaType: string, watchList: boolean): void {
    const url = `${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist?api_key=${API_KEY}&session_id=${SESSION_ID}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = {
      media_type: mediaType,
      media_id: mediaId,
      watchlist: watchList
    };
    this.http.post(url, body, {headers}).subscribe();  
  }

  removeMovieToWatchList(peliculaId: number): Observable<void> {
    const url = `${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist?api_key=${API_KEY}&session_id=${SESSION_ID}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const body = {
      media_type: 'movie',
      media_id: peliculaId,
      watchlist: false
    };
    return this.http.post<void>(url, body, { headers });
  }

  removeSerieToWatchList(serieId: number): Observable<void> {
    const url = `${API_BASE_URL}/account/${ACCOUNT_ID}/watchlist?api_key=${API_KEY}&session_id=${SESSION_ID}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const body = {
      media_type: 'tv',
      media_id: serieId,
      watchlist: false
    };
    return this.http.post<void>(url, body, { headers });
  }
}
