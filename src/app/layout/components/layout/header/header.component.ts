import { Component, OnInit } from '@angular/core';

import { HeaderNavigationItems } from './../../../config';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerNavigationItems = HeaderNavigationItems;

  constructor() { }

  ngOnInit() {
  }
}
