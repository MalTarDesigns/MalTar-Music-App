import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap, map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth-service/auth.service';
import { AuthActionTypes, Login, LoginSuccess, Register, LoginFailure } from './auth.actions';
import { EffectError } from '../../store/actions';
import { Errors } from '../../store/errors';
import { of, from } from 'rxjs';
import { AddUserSuccess } from '../../user/store/user.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((authInfo: IAuthenticate) =>
      from(this.authService.doLogin(authInfo)).pipe(
        mergeMap((authInfo) => {
          const user: IUser = {
            email: authInfo.user.email,
            uid: authInfo.user.uid,
            role: 'user', // TODO: replace with real data
            avatar: 'http://via.placeholder.com/100x100' // TODO: replace with real data
          }
          return [
            new LoginSuccess(),
            new AddUserSuccess(user)
          ];
        }),
        catchError(error => of(new EffectError(error)))
      )
    )
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType<Register>(AuthActionTypes.Register),
    map(action => action.payload),
    exhaustMap((auth: IAuthenticate) =>
      from(this.authService.doRegister(auth)).pipe(
        mergeMap((authInfo) => {
          const newUser: IUser = {
            email: authInfo.user.email,
            uid: authInfo.user.uid,
            role: 'user',
            avatar: 'http://via.placeholder.com/100x100'
          }
          return [
            new LoginSuccess(),
            new AddUserSuccess(newUser)
          ];
        }),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect()
  loginFailure$ = this.actions$.pipe(
    ofType<LoginFailure>(AuthActionTypes.LoginFailure),
    map(action => action.payload),
    map((errors: Errors) => new EffectError(errors))
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(() => this.router.navigate(['/user/login']))
  );
}
