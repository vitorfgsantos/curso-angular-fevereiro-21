import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm = this.formBuilder.group({
    usuario: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(4)]]
  });

  estaCarregando: boolean = false;
  erroNoLogin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.controls.usuario.markAsTouched();
      this.loginForm.controls.senha.markAsTouched();

      if (this.loginForm.controls.usuario.invalid) {
        this.usuarioInput?.nativeElement.focus();
        return;
      }

      if (this.loginForm.controls.senha.invalid) {
        this.senhaInput?.nativeElement.focus();
      }

      return;
    }

    this.login();
  }

  exibeErro(nomeControle: string) {
    if (!this.loginForm.controls[nomeControle]) {
      return false;
    }

    return this.loginForm.controls[nomeControle].invalid && this.loginForm.controls[nomeControle].touched;
  }

  login() {
    this.erroNoLogin = false;
    this.estaCarregando = true;

    this.loginService.logar(this.loginForm.value)
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
    console.log(error);
    
    this.erroNoLogin = true;
  }

}
