import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  ExercicioContadorComponent,
  ExercicioDataBindingComponent,
  ExercicioDiretivasComponent,
  ExercicioPipesComponent,
  FooterComponent,
  HeaderComponent,
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
  ]
})
export class SharedModule { }
