import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() titulo: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('On Changes');
  }

}
