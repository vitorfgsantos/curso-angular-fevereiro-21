import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  valorMonetario = 3000;
  data = new Date();

  filme = {
    titulo: 'Velozes e Furiosos 9',
    avaliacao: 4.42342342,
    precoAluguel: 12.99,
    dataLancamento: new Date(),
  }

}
