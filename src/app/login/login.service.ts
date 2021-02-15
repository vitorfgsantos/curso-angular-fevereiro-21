import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LoginCredenciais, LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  logar(credenciais: LoginCredenciais): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.API_URL + '/login', credenciais);
  }
}
