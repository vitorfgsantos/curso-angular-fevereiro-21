import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';
import { DetalhesLancamentoComponent } from './detalhes-lancamento/detalhes-lancamento.component';


@NgModule({
  declarations: [
    LancamentosComponent,
    PlanosContaComponent,
    AreaLogadaComponent,
    DetalhesLancamentoComponent,
  ],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    SharedModule,
  ]
})
export class AreaLogadaModule { }
