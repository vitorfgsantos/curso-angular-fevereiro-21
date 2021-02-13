import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  IMAGEM_PREFIXO = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  deveExibir = true;

  cursos = [
    'React',
    'Javascript',
    'Java',
    'Node'
  ];

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

}
