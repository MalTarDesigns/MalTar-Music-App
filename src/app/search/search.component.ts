import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../services/spotify/spotify.service';

import {Artist} from '../interfaces/artist';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes: Artist [];

  //creates a intance of the service
  constructor(private _spotifyService: SpotifyService) { 
    
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => { //we have to subscribe to the service
        this.searchRes = res.artists.items;
      }) 
  }

  ngOnInit() {
  }

}
