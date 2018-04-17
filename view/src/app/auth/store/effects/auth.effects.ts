import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError, observeOn } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

import * as AuthActions from '../actions';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    map((action: AuthActions.Login) => action.payload),
    exhaustMap((auth: IAuthenticate) =>
      Observable.fromPromise(this.authService.doLogin(auth)).pipe(
        map((user: IUser) => new AuthActions.LoginSuccess({ user: { email: user.email } })),
        catchError(error => of(new AuthActions.LoginFailure(error)))
      )
    )
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(AuthActions.REGISTER),
    map((action: AuthActions.Register) => action.payload),
    exhaustMap((auth: IAuthenticate) =>
      Observable.fromPromise(this.authService.doRegister(auth)).pipe(
        map((val: IUser) => {
          console.log(val);
          return new AuthActions.LoginSuccess({ user: { email: val.email } });
        }),
        catchError(error => of(new AuthActions.LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN_REDIRECT, AuthActions.LOGOUT),
    tap(() => this.router.navigate(['/login']))
  );
}
