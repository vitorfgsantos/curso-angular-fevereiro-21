import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Erro404Component } from './erro404/erro404.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './login/login.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
}, {
  path: 'cadastro',
  component: CadastroComponent,
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'lancamentos',
  component: LancamentosComponent,
}, {
  path: 'planos-conta',
  component: PlanosContaComponent
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '**',
  component: Erro404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
