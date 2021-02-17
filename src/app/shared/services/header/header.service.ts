import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public $reload = new Subject<null>()

  onReloadClick() {
    this.$reload.next();
  }
}
