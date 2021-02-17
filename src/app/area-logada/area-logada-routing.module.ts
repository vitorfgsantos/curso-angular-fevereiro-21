import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaLogadaComponent } from './area-logada.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: AreaLogadaComponent,
  children: [{
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }, {
    path: 'lancamentos',
    component: LancamentosComponent,
  }, {
    path: 'planos-conta',
    component: PlanosContaComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaLogadaRoutingModule { }
