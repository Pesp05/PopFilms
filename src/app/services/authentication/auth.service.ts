import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateRequestTokenResponse } from "../../models/authentication/create-request-token-response.interface";
import { Observable } from "rxjs";
import { CreateSessionResponse } from "../../models/authentication/create-session-response.interface";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // STEP 1
  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(
      `${environment.apiBaseUrl}/authentication/token/new?environment.apiKey=${environment.apiKey}`
    );
  }

  // STEP 3
  createSession(): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.apiBaseUrl}/authentication/session/new?environment.apiKey=${environment.apiKey}`,
      {
        request_token: localStorage.getItem('token'),
      }
    );
  }
}
