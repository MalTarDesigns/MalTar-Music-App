import { Component, OnInit } from '@angular/core';

import { BeatsService } from '../beats.service';

@Component({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  private beats; // creats the var beats for the constructor

  //creates a intance of the service
  constructor(private _beatService: BeatsService) { 
    this.beats = _beatService.getBeats();
  }
    

  ngOnInit() {
  }

}
