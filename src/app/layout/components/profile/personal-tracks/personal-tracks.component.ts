import { Component, OnInit } from '@angular/core';

import { PersonalTracks } from './../../../data';

@Component({
  selector: 'layout-personal-tracks',
  templateUrl: './personal-tracks.component.html',
  styleUrls: ['./personal-tracks.component.css']
})
export class PersonalTracksComponent implements OnInit {

  public personalTracks = PersonalTracks;
  
  constructor(){}

  ngOnInit() {
  }
}
