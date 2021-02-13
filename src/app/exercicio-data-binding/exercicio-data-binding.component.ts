import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Output() enviarInformacao = new EventEmitter()

  imagemURL = 'https://conteudo.imguol.com.br/c/entretenimento/11/2019/08/02/cachorrinho-sosia-de-salvador-dali-e-usado-para-campanha-de-adocao-1564760772496_v2_960x960.jpg';
  imageWidth = 100;
  botaoDesabilitado = true;

  meuTexto = '';

  valorDoContador = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getTextAcessivel() {
    return 'Texto acessível';
  }

  clicouNoBotao(event: MouseEvent) {
    this.enviarInformacao.emit(this.botaoDesabilitado)
  }

  trocarBotaoDesabilitado() {
    this.botaoDesabilitado = !this.botaoDesabilitado;
  }

  passouMouseEmCima() {
    console.log('Passou o mouse em cima...')
  }

  aoDigitar(event: any) {
    this.meuTexto = event.target.value;
  }

  novoValorNoContador(event: number) {
    this.valorDoContador = event;
  }

}
