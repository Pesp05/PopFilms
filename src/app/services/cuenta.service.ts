import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallesCuentaResponse } from '../models/detalles-cuenta.interface';

const API_KEY = '84692859733af3a8230341b350a595fd';
const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  constructor(private http: HttpClient) {}

  
  getAccountDetails(): Observable<DetallesCuentaResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<DetallesCuentaResponse>(
      `${API_BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
    );
  }
}
