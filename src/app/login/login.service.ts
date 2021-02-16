import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginCredenciais, LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  logar(credenciais: LoginCredenciais): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.API_URL + '/login', credenciais)
      .pipe(
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
  }
}
