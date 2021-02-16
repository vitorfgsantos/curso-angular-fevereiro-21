import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

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

  estaCarregando: boolean = false;
  erroNoLogin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
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
    this.erroNoLogin = false;
    this.estaCarregando = true;
    
    const credenciais = {
      usuario: this.usuario,
      senha: this.senha,
    };

    this.loginService.logar(credenciais)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false),
      )
      .subscribe(
        response => this.onSuccessLogin(),
        error => this.onErrorLogin(error),
      );
  }

  onSuccessLogin() {
    this.router.navigate(['dashboard']);
  }

  onErrorLogin(error: HttpErrorResponse) {
    this.erroNoLogin = true;
  }

}
