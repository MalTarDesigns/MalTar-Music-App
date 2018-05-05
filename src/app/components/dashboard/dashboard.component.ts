import { Component, OnInit } from '@angular/core';
import { BeatService } from '../../services/beat/beat.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  beats: Object; 
  constructor(private _beatService: BeatService) { }

  ngOnInit() {
    this._beatService.getBeats().subscribe(beats => {
      this.beats = beats
    });
  }

  
}
