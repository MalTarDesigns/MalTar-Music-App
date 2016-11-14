import { Component, OnInit } from '@angular/core';

import { BeatsService } from '../services/beats/beats.service';
declare var $:any; // This allows you to use jQuery below

@Component({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  private beats; // creats the var beats for the constructor
  private songs;
  private audio = new Audio();
  private url;
  currentSong: string;
  
  

  //creates a intance of the service
  constructor(private _beatService: BeatsService) { 
    this.beats = _beatService.getBeats();

    this.songs = _beatService.getSongs();


  }



  playAudio(event) {
    console.log('You clicked it!!');

     this.audio.src = event.target.herf;
     event.preventDefault();
     this.audio.play();
  
  }
  

  ngOnInit() {
  }

}


