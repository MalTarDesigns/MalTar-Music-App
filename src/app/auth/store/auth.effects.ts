import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap, map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth-service/auth.service';
import { AuthActionTypes, Login, LoginSuccess, Register, LoginFailure } from './auth.actions';
import { EffectError } from '../../store/actions';
import { Errors } from '../../store/errors';
import { of, Observable, from } from 'rxjs';


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
    from(this.authService
        .doLogin(authInfo))
        .pipe(
          map(user => new LoginSuccess({
            user: {
              email: user.email,
              uid: user.uid
            }
          })),
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
        mergeMap((user: IUser) => {
          return [
            new LoginSuccess({ user: { email: user.email } }),
            new EffectError({ error: {} })
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
    tap(() => this.router.navigate(['/login']))
  );
}
