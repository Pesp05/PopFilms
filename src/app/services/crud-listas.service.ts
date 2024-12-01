import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DetalleListaCreada, ListasCreadasResponse } from '../models/listas-creadas.interface';

const HEADERSANDPOST = {
  headers:{
    'Content-Type': 'application/json;charset=utf-8'
  }
};
const HEADERGET = {
  headers:{
    'Content-Type': 'application/json'
  }
};

@Injectable({
  providedIn: 'root'
})
export class CrudListasService {

  constructor(private http: HttpClient) { }

  getListasCreadas(): Observable<ListasCreadasResponse> {
    const SESSION_ID = localStorage.getItem('session_id');
    const ACCOUNT_ID = localStorage.getItem('account_id');
    return this.http.get<ListasCreadasResponse>(`${environment.apiBaseUrl}/account/${ACCOUNT_ID}/lists?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, HEADERGET);
  }

  createList(nombre: string, descripcion: string, idioma: string): Observable<void> {
    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.post<void>(`${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, { name: nombre, description: descripcion, language: idioma }, HEADERSANDPOST);
  }

  deleteList(idLista: number): Observable<void> {
    const SESSION_ID = localStorage.getItem('session_id');
    return this.http.delete<void>(`${environment.apiBaseUrl}/list/${idLista}?api_key=${environment.apiKey}&session_id=${SESSION_ID}`, HEADERSANDPOST);
  }

  getDetalleLista(idLista: number): Observable<DetalleListaCreada> {
    return this.http.get<DetalleListaCreada>(`${environment.apiBaseUrl}/list/${idLista}?api_key=${environment.apiKey}`, HEADERGET);
  }
}