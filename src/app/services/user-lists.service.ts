import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListsResponse } from '../models/user-lists-response.interface';
import { environment } from '../../environments/environment';

const HEADERGET = {
  headers:{
    'Content-Type': 'application/json'
  }
};

@Injectable({
  providedIn: 'root'
})
export class UserListsService {

  constructor(private http: HttpClient) { }

  getUserLists(): Observable<UserListsResponse>{
    const ACCOUNT_ID = localStorage.getItem('account_id');
    return this.http.get<UserListsResponse>(`${environment.apiBaseUrl}/account/${ACCOUNT_ID}/lists?api_key=${environment.apiKey}&session_id=${localStorage.getItem("session_id")}`, HEADERGET);
  }
}
