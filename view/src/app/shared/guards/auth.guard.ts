import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import * as fromStore from '../../auth/store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .select(fromStore.getLoggedIn)
      .map(authed => {
        if (!authed) {
          this.store.dispatch(
            new fromStore.LoginRedirect({
              queryParams: { returnUrl: state.url }
            })
          );
          return false;
        }

        return true;
      })
      .take(1);
  }
}
