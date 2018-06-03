import { Action } from '@ngrx/store';

export const ADD_USER =             '[Users] Add User';
export const ADD_USER_SUCCESS =     '[Users] Add User Success';
export const ADD_USER_FAIL =        '[Users] Add User Fail';
export const REMOVE_USER =          '[Users] Remove User';
export const REMOVE_USER_SUCCESS =  '[Users] Remove User Success';
export const REMOVE_USER_FAIL =     '[Users] Remove User Fail';
export const LOAD =                 '[Users] Load';
export const LOAD_SUCCESS =         '[Users] Load Success';
export const LOAD_FAIL =            '[Users] Load Fail';

/**
 * Add User to Users Actions
 */
export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: IUser) { }
}

export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: IUser) { }
}

export class AddUserFail implements Action {
  readonly type = ADD_USER_FAIL;

  constructor(public payload: IUser) { }
}

/**
 * Remove User from Users Actions
 */
export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: IUser) { }
}

export class RemoveUserSuccess implements Action {
  readonly type = REMOVE_USER_SUCCESS;

  constructor(public payload: IUser) { }
}

export class RemoveUserFail implements Action {
  readonly type = REMOVE_USER_FAIL;

  constructor(public payload: IUser) {}
}

/**
 * Load Users Actions
 */
export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: IUser[]) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddUser
  | AddUserSuccess
  | AddUserFail
  | RemoveUser
  | RemoveUserSuccess
  | RemoveUserFail
  | Load
  | LoadSuccess
  | LoadFail;
