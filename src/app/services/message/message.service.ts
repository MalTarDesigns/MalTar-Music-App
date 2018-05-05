import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // .map()

@Injectable()
export class MessageService {

  constructor(private _http: Http) { }
   
  getMessages() {
    return this._http.get('http://localhost:5000/api/v1/messages')
      .map(res => res.json());
  }

  saveMessage(newMessage){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post('http://localhost:5000/api/v1/message', newMessage, {headers: headers})
        .map(res => res.json());
  }

  deleteMessage(id) {
    return this._http.delete('http://localhost:5000/api/v1/message/' + id)
      .map(res => res.json());
  }

}
