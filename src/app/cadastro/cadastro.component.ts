import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { finalize, take } from 'rxjs/operators';

import { ErrosDeCadastro } from './cadastro.enums';
import { DadosCadastrais } from './cadastro.interfaces';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  @ViewChild('nomeInput') nomeInput: ElementRef | undefined;
  @ViewChild('loginInput') loginInput: ElementRef | undefined;
  @ViewChild('cpfInput') cpfInput: ElementRef | undefined;
  @ViewChild('senhaInput') senhaInput: ElementRef | undefined;

  dadosCadastrais: DadosCadastrais = {
    nome: '',
    cpf: '',
    login: '',
    senha: '',
  };

  erro = false
  mensagemErro = '';
  estaCarregando = false;

  usuarioCriado = false;

  constructor(
    private cadastroService: CadastroService,
  ) { }

  onSubmit(form: NgForm) {
    this.erro = false;

    if (!form.valid) {
      this.validarCamposDoFormulario(form.form);
      this.focarNoPrimeiroInputInvalido(form);
      return;
    }

    this.criarUsuario();
  }

  private validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as FormControl;
      control.markAsTouched();
    });
  }

  private focarNoPrimeiroInputInvalido(form: NgForm) {
    for (let control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const input = `${control}Input` as keyof CadastroComponent;
        (this[input] as ElementRef).nativeElement.focus();
        break;
      }
    }
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  criarUsuario() {
    this.estaCarregando = true;

    this.cadastroService.criarUsuario(this.dadosCadastrais)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        _response => this.onSuccessCriarUsuario(),
        error => this.onErrorCriarUsuario(error)
      );
  }

  onSuccessCriarUsuario() {
    this.usuarioCriado = true;
  }

  onErrorCriarUsuario(errorResponse: HttpErrorResponse) {
    this.erro = true;

    if (errorResponse.error.codigo === ErrosDeCadastro.UsuarioJaExiste) {
      this.mensagemErro = errorResponse.error.error;
    }
  }

}
