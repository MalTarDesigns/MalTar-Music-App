import { Component, OnInit } from '@angular/core';
import { SideNavigationItems} from './../../../config';

@Component({
  selector: 'layout-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public sideNavigationItems = SideNavigationItems;

  constructor() { }

  ngOnInit() {
  }
}
