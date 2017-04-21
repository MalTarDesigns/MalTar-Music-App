import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // .map()
import { Message } from '../../interfaces/message'

@Injectable()
export class MessageService {

  constructor(private _http: Http) { }

  getMessages() {
    return this._http.get('http://localhost:5000/api/v1/messages')
      .map(res => res.json());
  }

  saveMessage(newMessage){
    console.log(newMessage);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post('http://localhost:5000/api/v1/message', JSON.stringify(newMessage), {headers: headers})
        .map(res => res.json());
  }

  // deleteMessage(message) {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //     return this._http.post('http://localhost:5000/api/v1/message', message, {headers: headers})
  //       .map(res => res.json());
  // }


}
