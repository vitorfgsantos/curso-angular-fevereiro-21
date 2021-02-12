import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Seja bem-vindo!';

  constructor() {
    setTimeout(() => {
      console.log('Mudou o valor...');
      this.title = 'Outro título';
    }, 3000);
  }

  somar(numero1: number, numero2: number) {    
    return numero1 + numero2;
  }

}
