import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  authState: any = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  doRegister(value): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(user => (this.authState = user));
  }

  doLogin(value): Promise<any> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(user => (this.authState = user));
  }

  doLogout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  doFacebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  doTwitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider): Promise<any> {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.authState = credential.user;
    });
  }
}
