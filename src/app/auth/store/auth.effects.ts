import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError, observeOn, switchMap, mergeMap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

import * as AuthActions from './auth.actions';
import * as FromActions from '../../store/actions';
import { AuthService } from '../services/auth-service/auth.service';

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
    exhaustMap((auth: IAuthenticate) => {
      return Observable.fromPromise(this.authService.doLogin(auth)).pipe(
        mergeMap((user: IUser) => {
          return [
            new AuthActions.LoginSuccess({ user: { email: user.email } }),
            new FromActions.EffectError({ error: {} })
          ];
        }),
        catchError(error => of(new AuthActions.LoginFailure({ error })))
      );
    })
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(AuthActions.REGISTER),
    map((action: AuthActions.Register) => action.payload),
    exhaustMap((auth: IAuthenticate) =>
      Observable.fromPromise(this.authService.doRegister(auth)).pipe(
        mergeMap((user: IUser) => {
          return [
            new AuthActions.LoginSuccess({ user: { email: user.email } }),
            new FromActions.EffectError({ error: {} })
          ];
        }),
        catchError(error => of(new AuthActions.LoginFailure({ error })))
      )
    )
  );

  @Effect()
  loginFailure$ = this.actions$.pipe(
    ofType(AuthActions.LOGIN_FAILURE),
    map((action: FromActions.EffectError) => action.payload),
    map((errors: Errors) => new FromActions.EffectError(errors))
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
