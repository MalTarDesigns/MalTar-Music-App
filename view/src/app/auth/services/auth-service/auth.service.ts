import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
// import { tokenNotExpired } from 'angular2-jwt'; // https://github.com/auth0/angular2-jwt

@Injectable()
export class AuthService {
  domain = 'http://localhost:5000/'; // Development Domain - Not Needed in Production
  authToken: any;
  user: any;

  constructor(private _http: Http) { }

  // post sends the data
  // get retrieves the data

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post(this.domain + 'users/register', user, {headers: headers})
        .map(res => res.json()); // returns the json data from the new registered user (api)
    }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post(this.domain + 'users/authenticate', user, {headers: headers})
        .map(res => res.json());
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken(); // gets the user data from this function
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
      return this._http.get(this.domain + 'users/profile', {headers: headers})
        .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token); // Storing the token to localStorage
    localStorage.setItem('user', JSON.stringify(user)); // Storing the user to localStorage
    this.authToken = token;
    this.user = user;
  }

  loadToken() { // fetched the getProfile data from localStorage b/c profile route is secured
    const token = localStorage.getItem('id_token'); // retrives the user data from localStorage
    this.authToken = token;
  }

  loggedIn() {
    // return tokenNotExpired('id_token');
    // Note: tokenNotExpired will by default assume the token name is token
    // unless a token name is passed to it, ex: tokenNotExpired('token_name').
    // This will be changed in a future release to automatically use the token
    // name that is set in AuthConfig.
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
