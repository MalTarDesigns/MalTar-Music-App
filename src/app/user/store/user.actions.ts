import { Action } from '@ngrx/store';

export enum UserActionTypes {
  AddUser = '[Users] Add User',
  AddUserSuccess = '[Users] Add User Success',
  AddUserFail = '[Users] Add User Fail',
  LoadUser = '[Users] Load',
  LoadUserSuccess = '[Users] Load Success',
  LoadUserFail = '[Users] Load Fail'
}

/**
 * Add User to Users Actions
 */

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;

  constructor(public payload: IUser) { }
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.AddUserSuccess;

  constructor(public payload: IUser) { }
}

export class AddUserFail implements Action {
  readonly type = UserActionTypes.AddUserFail;

  constructor(public payload: any) { }
}

/**
 * Load Users Actions
 */
export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;

  constructor(public payload: IUser) { }
}

export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LoadUserFail;

  constructor(public payload: any) { }
}

export type UserActions =
    AddUser
  | AddUserSuccess
  | AddUserFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail;
