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
  private trackId;
  currentSong: string;
  private is_playing = false;
  private playingtrack;
  private audio_folder = "audio/";
	private audio_ext = ".mp3"; 

  audio_index = 1;

  //creates a intance of the service
  constructor(private _beatService: BeatsService) { 
    

    //this.songs = _beatService.getSongs(); // this should be placed in ngOnInit

  }


 private storedElement;



playAudio(event) {
    event.preventDefault();
    if (this.playingtrack != event.target) { // New track
        this.is_playing = true;
        event.target.classList.add("fa-pause");
        if (typeof(this.playingtrack) != 'undefined') {
          this.playingtrack.classList.remove("fa-pause");
        }
        this.audio.pause();
        this.audio.src = event.target.href;
        this.audio.load();
        this.audio.play();
    } else { // Same track
        if (this.is_playing) {
            this.audio.pause();
            this.is_playing = false;
            this.playingtrack.classList.remove("fa-pause");
        } else { //Initial track 
            this.audio.play();
            this.is_playing = true;
            this.playingtrack.classList.add("fa-pause");
        }
    }
    this.playingtrack = event.target;
}

  ngOnInit() {
    this.beats = this._beatService.getBeats();
    
    
  }

} /* ends export class */


