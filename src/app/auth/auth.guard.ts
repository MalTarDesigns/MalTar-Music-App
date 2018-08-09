import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from './store';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromStore.AuthState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .select(fromStore.getLoggedIn).pipe(
        map( authed => {
          if (!authed) {
            this.store.dispatch(
              new fromStore.LoginRedirect({
                queryParams: { returnUrl: state.url }
              })
            );
            return false;
          }
        }),
        take(1)
      )
  }
}
