import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class CadastroModule { }
