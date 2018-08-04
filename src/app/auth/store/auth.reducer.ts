import { AuthActions, AuthActionTypes } from './auth.actions';

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

export function reducer(state = initialState, action: AuthActions) {
  switch (action.type) {

    case AuthActionTypes.Login: {
      return {
        ...state,
        pending: true,
      }
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        pending: false,
        loggedIn: true,
        user: action.payload.user,
        error: null
      }
    }

    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        pending: false,
        loggedIn: false,
        error: action.payload.error
      }
    }

    case AuthActionTypes.Logout: {
      return state;
    }

    default: {
      return state;
    }
  }
}
