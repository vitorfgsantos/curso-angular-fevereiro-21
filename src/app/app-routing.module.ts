import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'cadastro',
  loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule),
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: '**',
  loadChildren: () => import('./erro404/erro404.module').then(m => m.Erro404Module),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
