import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // .map()

@Injectable()
export class UploadService {

  constructor(private _http: Http) { }

  // saveUpload(uploadFile){
  //   console.log('this is my file' + uploadFile);
  //   let headers = new Headers();
  //       headers.append('enctype', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');
  //       this._http.post('http://localhost:5000/upload', uploadFile, { headers: headers })
  //           .map(res => res.json());
  // }
  
}
