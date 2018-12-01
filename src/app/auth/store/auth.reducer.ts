import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
  pending: boolean;
  loggedIn: boolean;
  error: string;
}

export const initialState: AuthState = {
  pending: false,
  loggedIn: false,
  error: null
};

export function reducer(state = initialState, action: AuthActions) {
  switch (action.type) {

    case AuthActionTypes.Login: {
      return {
        ...state,
        pending: true,
      };
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        pending: false,
        loggedIn: true,
        error: null
      };
    }

    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        pending: false,
        loggedIn: false,
        error: action.payload
      }
    }

    case AuthActionTypes.Logout: {
      return {
        ...state,
        pending: false,
        loggedIn: false
      };
    }

    default: {
      return state;
    }
  }
}
