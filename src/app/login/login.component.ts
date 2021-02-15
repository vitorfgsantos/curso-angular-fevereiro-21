import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('usuarioInput') usuarioInput: ElementRef | undefined;
  @ViewChild('senhaInput') senhaInput: ElementRef | undefined;

  usuario: string = '';
  senha: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.controls.usuario.markAsTouched();
      form.controls.senha.markAsTouched();

      if (form.controls.usuario.invalid) {
        this.usuarioInput?.nativeElement.focus();
        return;
      }

      if (form.controls.senha.invalid) {
        this.senhaInput?.nativeElement.focus();
      }

      return;
    }

    this.login();
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  login() {
    const credenciais = {
      usuario: this.usuario,
      senha: this.senha,
    };

    this.loginService.logar(credenciais)
      .subscribe(
        response => this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      );
  }

  onSuccessLogin(response: LoginResponse) {
    this.authService.setUsuario(response.usuario);
    this.authService.setToken(response.token);
    
    this.router.navigate(['dashboard']);
  }

  onErrorLogin(error: HttpErrorResponse) {
    console.log('Deu erro', error);
  }

}
