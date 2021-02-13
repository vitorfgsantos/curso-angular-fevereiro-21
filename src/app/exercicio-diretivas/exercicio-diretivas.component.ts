import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExercicioDiretivasComponent implements OnInit {

  constructor() {
    console.log('Construtor');
  }

  ngOnInit() {
    console.log('On Init');
  }

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  IMAGEM_PREFIXO = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  deveExibir = true;

  cursos = [
    'React',
    'Javascript',
    'Java',
    'Node'
  ];

  classeCSS = 'verde';

  adicionarMaisUmCurso(curso: string) {
    this.cursos.push(curso);
  }

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  somar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  getExibir() {
    return this.deveExibir;
  }

  getURLImagem(imagemURL: string) {
    return this.IMAGEM_PREFIXO + imagemURL;
  }

  trocarParaVermelho() {
    this.classeCSS = 'vermelho';
  }

  trocarParaVerde() {
    this.classeCSS = 'verde';
  }

  getClasseCSS(valor: number) {
    return {
      'verde': valor > 0,
      'vermelho': valor < 0,
      'fonte-grande': this.deveExibir
    }
  }

}
