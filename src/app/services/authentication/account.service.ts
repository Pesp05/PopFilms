import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountDetailsResponse } from "../../models/authentication/account-details-response.interface";
import { Observable } from "rxjs";


const API_KEY = '4c92ea126ceabbca4fbdaa0e7e3696ca';
const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
    providedIn: 'root',
  })
  export class AccountService {
    constructor(private http: HttpClient) {}

    getAccountDetails(): Observable<AccountDetailsResponse> {
      let sessionId = localStorage.getItem('session_id');
      return this.http.get<AccountDetailsResponse>(
        `${API_BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
      );
    }

    takeOneLetter(userName:string):string{
      let primeraLetra = this.getAccountDetails.name.charAt(0);
      return primeraLetra;
    }
  }
