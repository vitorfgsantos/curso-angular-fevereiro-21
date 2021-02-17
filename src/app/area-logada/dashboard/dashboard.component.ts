import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { DashboardResponse } from './dashboard.interfaces';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuario!: Usuario;
  dashboard: DashboardResponse | undefined;

  inicio = '2021-01-01';
  fim = '2021-02-01';

  erro = false;
  estaCarregando = false;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario()!;
    this.getDashboard();
  }

  getDashboard() {
    this.estaCarregando = true;
    this.erro = false;

    this.dashboardService.getDashboard(this.inicio, this.fim)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false),
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      )
  }

  onSuccess(response: DashboardResponse) {
    this.dashboard = response;
    console.log(response);
  }

  onError(error: HttpErrorResponse) {
    this.erro = true;
  }

  getTextSaldoCSS(saldo: number) {
    return {
      'text-success': saldo > 0,
      'text-danger': saldo < 0,
    }
  }

  getBordaCardCSS(saldo: number) {
    return {
      'border-success': saldo > 0,
      'border-danger': saldo < 0
    }
  }

}
