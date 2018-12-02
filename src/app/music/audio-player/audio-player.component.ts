import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicPlayerService } from 'ngx-soundmanager2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  songs = [
    {
      id: 'one',
      title: 'A Million',
      artist: 'Jay-Z Instrumentals',
      url: 'https://ia800405.us.archive.org/8/items/Jay-Z_Instrumentals/A%20Million%20And%20One%20Questions%20%28Premiere%20Remix%20Instrumental%29-MF.mp3'
    },
    {
      id: 'two',
      title: 'How Long',
      artist: 'Raised On Zenith',
      url: 'https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=468f1ed20aae2aba824fb4e6923ff850&id=470307233&stream=1&ts=1502595994.0'
    },
    {
      id: 'three',
      title: 'Details and Structures',
      artist: 'Air This Side of Caution',
      url: 'http://lukefarran.com/music/AirThisSideOfCaution/NatureWillTurnOnUs/02_Details%26Structures.mp3'
    },
    {
      id: 'four',
      title: 'Here We Go',
      artist: 'Air This Side of Caution',
      url: 'http://lukefarran.com/music/AirThisSideOfCaution/NatureWillTurnOnUs/03_HereWeGo.mp3'
    },
    {
      id: 'five',
      title: 'Without You',
      artist: 'The Assembly',
      url: 'http://lukefarran.com/music/TheAssembly/TheFutureHasBeenSold_LukeMaster/07_WithoutYou.mp3'
    }
  ];

  mute: boolean;

  currentPlaying: any;

  currentTrackPostion: number;
  currentTrackDuration: number;
  currentTrackProgress: number;
  volume: number;
  isPlaying: boolean;

  // subscriptions
  private musicPlayerMuteSubscription: Subscription;
  private musicPlayerTrackIdSubscription: Subscription;
  private musicPlayerVolumeSubscription: Subscription;
  private musicPlayerEventSubscription: Subscription

  constructor(private _musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
    // Add all tracks to playlist
    // this.songs.map((song, index) => {
    //   console.log(index);
    //   this._musicPlayerService.addToPlaylist(song);
    // });
    // console.log(this.playlist());

    // Subscribe for player changes to update bindings
    this.isPlaying = this._musicPlayerService.isPlayingStatus();
    this.musicPlayerEventSubscription = this._musicPlayerService.musicPlayerEventEmitter
      .subscribe((event) => {
        // Set isPlaying variable
        if (event.event === 'music:isPlaying') {
          if (event.data === true) {
            this.isPlaying = event.data;
          } else if (event.data === false) {
            this.isPlaying = false;
          }
        }
      });

    // Subscribe for mute changes to update bindings
    this.mute = this._musicPlayerService.getMuteStatus();
    this.musicPlayerMuteSubscription = this._musicPlayerService.musicPlayerMuteEventEmitter
      .subscribe((event) => {
        this.mute = event.data;
      });

    // Subscribe for track changes
    this.currentPlaying = this._musicPlayerService.currentTrackData();
    this.musicPlayerTrackIdSubscription = this._musicPlayerService.musicPlayerTrackEventEmitter
      .subscribe((event) => {
        this.currentPlaying = this._musicPlayerService.currentTrackData();
        this.currentTrackPostion = event.data.trackPosition;
        this.currentTrackDuration = event.data.trackDuration;
        this.currentTrackProgress = event.data.trackProgress;
      });

    // subscribe for volume changes
    this.volume = this._musicPlayerService.getVolume();
    this.musicPlayerVolumeSubscription = this._musicPlayerService.musicPlayerVolumeEventEmitter
      .subscribe((event) => {
        this.volume = event.data;
      });
  }

  get progress(): string {
    return this.currentTrackProgress ? (this.currentTrackProgress.toString() + '%') : '0%';
  }

  get playlist() {
    return this._musicPlayerService.getPlaylist();
  }

  ngOnDestroy() {
    this.musicPlayerMuteSubscription.unsubscribe();
    this.musicPlayerTrackIdSubscription.unsubscribe();
    this.musicPlayerVolumeSubscription.unsubscribe();
    this.musicPlayerEventSubscription.unsubscribe();
  }

}
