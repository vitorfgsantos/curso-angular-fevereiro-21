import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DadosCadastrais } from './cadastro.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  criarUsuario(dadosCadastrais: DadosCadastrais): Observable<null> {
    return this.http.post<null>(this.API_URL + '/usuarios', dadosCadastrais);
  }
}
