import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountDetailsResponse } from "../../models/authentication/account-details-response.interface";
import { Observable } from "rxjs";
import { ListaPeliculasResponse } from "../../models/lista-peliculas-response.interface";
import { ListaSeries } from "../../models/lista-series.interface";
import { environment } from "../../../environments/environment";

const SESSION_ID = localStorage.getItem('session_id') ?? '';
const ACCOUNT_ID = parseInt(localStorage.getItem('account_id') ?? '0', 10);

@Injectable({
    providedIn: 'root',
  })
  export class AccountService {
    constructor(private http: HttpClient) {}
  
    getAccountDetails(): Observable<AccountDetailsResponse> {
      return this.http.get<AccountDetailsResponse>(
        `${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${SESSION_ID}`
      );
    }

    getAccountFavoriteMovies(): Observable<ListaPeliculasResponse> {
         const IDIOMA = localStorage.getItem('idioma');
      return this.http.get<ListaPeliculasResponse>(
        `${environment.apiBaseUrl}/account/${ACCOUNT_ID}/favorite/movies?language=${IDIOMA}&api_key=${environment.apiKey}&session_id=${SESSION_ID}`
      );
    }

    getAccountFavoriteSeries(): Observable<ListaSeries> {
         const IDIOMA = localStorage.getItem('idioma');
      return this.http.get<ListaSeries>(
        `${environment.apiBaseUrl}/account/${ACCOUNT_ID}/favorite/tv?language=${IDIOMA}&api_key=${environment.apiKey}&session_id=${SESSION_ID}`
      );
    }
    markAsFavorite(mediaId: number, mediaType: string, favorite: boolean): void {
      const url = `${environment.apiBaseUrl}/account/${ACCOUNT_ID}/favorite?api_key=${environment.apiKey}&session_id=${SESSION_ID}`;
      const headers = {
        'Content-Type': 'application/json',
      };
      const body = {
        media_type: mediaType,
        media_id: mediaId,
        favorite: favorite
      };
      this.http.post(url, body, { headers }).subscribe();
    }


    removeFavoriteSerie(serieId: number): Observable<void> {
      const url = `${environment.apiBaseUrl}/account/${ACCOUNT_ID}/favorite/tv/${serieId}?api_key=${environment.apiKey}&session_id=${SESSION_ID}`;
      return this.http.delete<void>(url);
    }

    removeFavoritePelicula(peliculaId: number): Observable<void> {
      const url = `${environment.apiBaseUrl}/account/${ACCOUNT_ID}/favorite/movies/${peliculaId}?api_key=${environment.apiKey}&session_id=${SESSION_ID}`;
      return this.http.delete<void>(url);
    }
  }