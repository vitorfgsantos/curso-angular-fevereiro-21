import { Injectable } from '@angular/core';

import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario | undefined;
  token: string | undefined;

  constructor() { }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getUsuario() {
    if (this.usuario) {
      return this.usuario;
    }

    const usuarioGuardado = localStorage.getItem('usuario')
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return JSON.parse(usuarioGuardado);
    }

    return undefined;
  }

}
