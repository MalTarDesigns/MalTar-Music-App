export class Beats {

      public id: number;
      public title: string;
      public producer: string;
      public cover: string;
      public duration: number;
      public bpm: number;
      public genre: string;
      public price: number;
      public url: string;

      construtor (      
            id: number,
            title: string,
            producer: string,
            cover: string,
            duration: number,
            bpm: number,
            genre: string,
            price: number,
            url: string ) {
                  this.id = id;
                  this.title = title;
                  this.producer = producer;
                  this.cover = cover;
                  this.duration = duration;
                  this.bpm = bpm;
                  this.genre = genre;
                  this.price = price;
                  this.url = url;

      }



 }