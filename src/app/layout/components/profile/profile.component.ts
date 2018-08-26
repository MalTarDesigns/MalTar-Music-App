import { Component, OnInit } from '@angular/core';

import { UserData } from './../../data';

@Component({
  selector: 'layout-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userData = UserData;
  
  constructor(){}

  ngOnInit() {
  }
}
