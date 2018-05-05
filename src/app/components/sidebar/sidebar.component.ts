import { Component, OnInit } from '@angular/core';
declare var $:any; // This allows you to use jQuery below

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor() { 
   
  }

  ngOnInit() {
  }

  menuToggle() {
    console.log('working....');
    $("#wrapper").toggleClass("toggled");
  }

    


}
