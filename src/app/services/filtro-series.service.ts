import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenreListResponse } from '../models/genre-list-response.interface';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const HEADERS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgwYWRmMTdkNmVmN2UxZjI3ZmZlYmNkNjYyMzVjZiIsIm5iZiI6MTczMjAwODgyNC45NzgxOTMsInN1YiI6IjY3MzFiZGZkYjZhMmE5ZjE0YTJiN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPqSAxVYi31-2EBAZXoXIU1pCznAQQIX0-rAvddUV4M'
  }
};

@Injectable({
  providedIn: 'root'
})
export class FiltroSeriesService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenreListResponse>{
    return this.http.get<GenreListResponse>(`${API_BASE_URL}/genre/tv/list?&language=es-ES`, HEADERS);
  }
}
