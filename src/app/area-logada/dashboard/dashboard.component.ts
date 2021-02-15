import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuario!: Usuario;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }

}
