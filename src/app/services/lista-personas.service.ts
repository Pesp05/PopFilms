import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ListaPersonas} from '../models/lista-personas.interfaces';
import {Observable} from 'rxjs';
import { DetallePersonaResponse } from '../models/details-personas.interfaces';
import { CreditosPersonasResponse } from '../models/creditos-personas.interfaces';


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

  getPersonas(): Observable<ListaPersonas> {
    return this.http.get<ListaPersonas>(`https://api.themoviedb.org/3/person/popular?&language=es-ES`, HEADERS);{     
  }
}

  getpersonasId(id: number): Observable<DetallePersonaResponse> {
    return this.http.get<DetallePersonaResponse>(`https://api.themoviedb.org/3/person/${id}`, HEADERS); {
  }
}


  getCreditosId(id: number): Observable<CreditosPersonasResponse> {
    return this.http.get<CreditosPersonasResponse>(`https://api.themoviedb.org/3/person/${id}/combined_credits?&language=es-ES`, HEADERS); {  
  }
}


}