import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: [ './audio-player.component.css' ]
})
export class AudioPlayerComponent implements OnInit {
  private beat; // creats the var beat for the constructor
  private songs;
  private audio = new Audio();
  private trackId;
  currentSong: string;
  private is_playing = false;
  private playingtrack;
  private audio_folder = 'audio/';
  private audio_ext = '.mp3';
  audio_index = 1;

  constructor() {}

  ngOnInit() {}

  playAudio(event) {
    event.preventDefault();
    if (this.playingtrack !== event.target) {
      // New track
      this.is_playing = true;
      event.target.classList.add('fa-pause');
      if (this.playingtrack !== 'undefined') {
        this.playingtrack.classList.remove('fa-pause');
      }
      this.audio.pause();
      this.audio.src = event.target.href;
      this.audio.load();
      this.audio.play();
    } else {
      // Same track
      if (this.is_playing) {
        this.audio.pause();
        this.is_playing = false;
        this.playingtrack.classList.remove('fa-pause');
      } else {
        // Initial track
        this.audio.play();
        this.is_playing = true;
        this.playingtrack.classList.add('fa-pause');
        if (this.audio.onended) {
          event.target.classList.remove('fa-pause');
        }
      }
    }
    this.playingtrack = event.target;
  }
}
