import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player.component';
import { AudioControlsComponent } from './audio-controls/audio-controls.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MusicPlayerComponent,
    AudioControlsComponent
  ],
  declarations: [MusicPlayerComponent, AudioControlsComponent]
})
export class MusicPlayerModule { }
