import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { PersonalTracks } from './../../../data';

@Component({
  selector: 'layout-personal-tracks',
  templateUrl: './personal-tracks.component.html',
  styleUrls: ['./personal-tracks.component.css']
})
export class PersonalTracksComponent implements OnInit {

  public personalTracks = PersonalTracks;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  public sidenavOpened: boolean = true;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }
}
