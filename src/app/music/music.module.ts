import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MaterialModule } from '../material.module';
import { NgxSoundmanager2Module } from 'ngx-soundmanager2';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxSoundmanager2Module.forRoot()
  ],
  declarations: [AudioPlayerComponent],
  exports: [AudioPlayerComponent]
})
export class MusicModule { }
