import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Erro404RoutingModule } from './erro404-routing.module';
import { Erro404Component } from './erro404.component';


@NgModule({
  declarations: [
    Erro404Component,
  ],
  imports: [
    CommonModule,
    Erro404RoutingModule
  ]
})
export class Erro404Module { }
