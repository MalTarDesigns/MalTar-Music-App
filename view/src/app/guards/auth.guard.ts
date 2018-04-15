import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/services/auth-service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}

  // Guard that will protect the links from users that are not signed in
  canActivate() {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['login']);
      return false;
    }
  }
}
