import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public sidenavOpened: boolean = true;
  
  constructor(){}

  ngOnInit() {
  }
}
