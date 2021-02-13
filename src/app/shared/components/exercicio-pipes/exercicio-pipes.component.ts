import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers: [DecimalPipe]
})
export class ExercicioPipesComponent {

  constructor(
    private decimalPipe: DecimalPipe,
  ) { }

  valorMonetario = 3000;
  data = new Date();

  filme = {
    titulo: 'Velozes e Furiosos 9',
    avaliacao: 4.42342342,
    precoAluguel: 12.99,
    dataLancamento: new Date(),
  }

  compras = [{
    produto: 'lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    peso: 29.33333,
    quantidade: 2,
    data: new Date(2020, 1, 10, 19, 30),
  }];

  getPesoFormatado(peso: number) {
    if (peso <= 0) {
      return 'sem peso';
    }

    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  }

}
