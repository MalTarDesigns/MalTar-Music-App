import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
  Register = '[Auth] Register'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: IAuthenticate) { }
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;

  constructor(public payload: IAuthenticate) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: IUser }) { }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) { }
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;

  constructor(public payload: any = {}) { }
}
export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor(public payload: any = {}) { }
}

export type AuthActions =
  Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Register
  | Logout;
