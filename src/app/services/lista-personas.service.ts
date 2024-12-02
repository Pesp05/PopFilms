import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ListaPersonas} from '../models/lista-personas.interfaces';
import {Observable} from 'rxjs';
import { DetallePersonaResponse } from '../models/details-personas.interfaces';
import { CreditosPersonasResponse } from '../models/creditos-personas.interfaces';
import { environment } from '../../environments/environment';


const HEADERS = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY3MjY3MC4wMjY2OSwic3ViIjoiNjczMWJlMDY3ZWYyYzMxZDc4ZWRhYmY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yu0Vz62aRfMDWK5FKDNiUKsrGrvvd_3zh0xhqp87BNI'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ListaPersonasService {

  constructor(private http: HttpClient) { }

  getPersonas(page: number): Observable<ListaPersonas> {
        const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<ListaPersonas>(`${environment.apiBaseUrl}/person/popular?&language=${IDIOMA}&page=${page}`, HEADERS);{     
  }
}

  getpersonasId(id: number): Observable<DetallePersonaResponse> {
    return this.http.get<DetallePersonaResponse>(`${environment.apiBaseUrl}/person/${id}`, HEADERS); {
  }
}


  getCreditosId(id: number): Observable<CreditosPersonasResponse> {
        const IDIOMA = localStorage.getItem('idioma');
    return this.http.get<CreditosPersonasResponse>(`${environment.apiBaseUrl}/person/${id}/combined_credits?&language=${IDIOMA}`, HEADERS); {  
  }
}


}