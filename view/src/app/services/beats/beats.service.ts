import { Injectable } from '@angular/core';

@Injectable() // Always use this for services
export class BeatsService {

    getBeats() {
      return [
        {
          id: '1',
          title: 'fire beat',
          producer: 'Live',
          cover: 'http://placehold.it/50x50',
          duration: '5.02',
          bpm: '100',
          genre: 'hip-hop',
          price: '29.95',
          url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
        },
        {
          id: '2',
          title: 'two step',
          producer: 'Live',
          cover: 'http://placehold.it/50x50',
          duration: '5.02',
          bpm: '85',
          genre: 'hip-hop',
          price: '19.95',
          url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
        },
        {
          id: '3',
          title: 'make love',
          producer: 'Live',
          cover: 'http://placehold.it/50x50',
          duration: '5.02',
          bpm: '98',
          genre: 'R&B',
          price: '39.95',
          url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
        },

        {
          id: '4',
          title: 'sweet time',
          producer: 'MalTar',
          cover: 'http://placehold.it/50x50',
          duration: '5.02',
          bpm: '108',
          genre: 'R&B',
          price: '29.95',
          url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
        },
        {
          id: '5',
          title: 'dirty time',
          producer: 'Dirty D',
          cover: 'http://placehold.it/50x50',
          duration: '2.50',
          bpm: '98',
          genre: 'R&B',
          price: '99.95',
          url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
        },
        {
          id: '6',
          title: 'Lean on fire',
          producer: 'Justin',
          cover: 'http://placehold.it/50x50',
          duration: '3.25',
          bpm: '95',
          genre: 'Hip-Hop',
          price: '3000.00',
          url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
        },

        {
          id: '7',
          title: 'Lean on fire',
          producer: 'Justin',
          cover: 'http://placehold.it/50x50',
          duration: '3.25',
          bpm: '95',
          genre: 'Hip-Hop',
          price: '3000.00',
          url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
        }

    ];
  }/* end getBeats(); */ // - move this data to it's own Json file 

} /* end class */
