import { ActionReducer } from '@ngrx/store';
import * as fromActions from './auth.actions';
import { AppState } from '../../store/index';

export interface State extends AppState {
  auth: AuthState;
}
export interface AuthState {
  pending: boolean
  loggedIn: boolean
  user: IUser | null;
  error: string
}

export const initialState: AuthState = {
  pending: false,
  loggedIn: false,
  user: null,
  error: null
};

export const authReducer: ActionReducer<AuthState> = (state = initialState, action: fromActions.Actions) => {
  switch (action.type) {

    case fromActions.LOGIN: {
      return {
        ...state,
        pending: true,
      }
    }

    case fromActions.LOGIN_SUCCESS: {
      return {
        ...state,
        pending: false,
        loggedIn: true,
        user: action.payload.user,
        error: null
      }
    }

    case fromActions.LOGIN_FAILURE: {
      return {
        ...state,
        pending: false,
        loggedIn: false,
        error: action.payload.error
      }
    }

    case fromActions.LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: null
      }
    }

    default: {
      return state;
    }
  }
}
