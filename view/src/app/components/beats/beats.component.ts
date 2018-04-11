import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {BeatService} from '../../services/beat/beat.service';

@Component({
  selector: 'beats',
  templateUrl: './beats.component.html',
  styleUrls: ['./beats.component.css']
})
export class BeatsComponent implements OnInit {
  beats: Object;
  user; 

  constructor(
    private _authService:AuthService,
    private _beatService:BeatService
  ) { }

  ngOnInit() {
    // Get profile username on page load
    this._authService.getProfile().subscribe(profile => {
      this.user = profile.user.username; // Used when creating new blog posts and comments
    });

    this._beatService.getBeats().subscribe(beats => {
      //console.log(beats);
      debugger;
      this.beats = beats;
    });
  }

}
