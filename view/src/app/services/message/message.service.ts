import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // .map()

@Injectable()
export class MessageService {

  constructor(private _http: Http) { }

  saveMessage(message) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post('http://localhost:5000/api/v1/message', message, {headers: headers})
        .map(res => res.json());
  }

  getMessage() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post('http://localhost:5000/api/v1/messages', {headers: headers})
        .map(res => res.json());
  }
}
