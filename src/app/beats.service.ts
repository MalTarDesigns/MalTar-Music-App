import { Injectable } from '@angular/core';

@Injectable()
export class BeatsService {

  beats = [];

  constructor() {
    this.beats = [
      {
        title: 'fire beat',
        producer: 'Live',
        cover: 'http://placehold.it/50x50',
        duration: '5.02',
        bpm: '100',
        genre: 'hip-hop',
        price: '$29.95'
      },
      {
        title: 'two step',
        producer: 'Live',
        cover: 'http://placehold.it/50x50',
        duration: '5.02',
        bpm: '85',
        genre: 'hip-hop',
        price: '$19.95'
      },
      {
        title: 'make love',
        producer: 'Live',
        cover: 'http://placehold.it/50x50',
        duration: '5.02',
        bpm: '98',
        genre: 'R&B',
        price: '$39.95'
      },

      {
        title: 'sweet time',
        producer: 'MalTar',
        cover: 'http://placehold.it/50x50',
        duration: '5.02',
        bpm: '108',
        genre: 'R&B',
        price: '$29.95'
      }

    ]//*beats array end
   }

  getBeats(){
    return this.beats;
  }



}
