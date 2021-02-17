import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private headerService: HeaderService,
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  onReloadClick() {
    this.headerService.onReloadClick();
  }

}
