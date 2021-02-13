import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

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

}
