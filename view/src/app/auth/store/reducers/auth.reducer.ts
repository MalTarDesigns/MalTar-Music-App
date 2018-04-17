import * as fromAuth from '../actions/auth.action';

export interface AuthState {
  loggedIn: boolean;
  user: IUser | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null
};

export function reducer(state = initialState, action: fromAuth.Actions): AuthState {
  switch (action.type) {
    case fromAuth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    }
    case fromAuth.LOGIN_FAILURE: {
      return initialState;
    }

    case fromAuth.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: AuthState) => state.loggedIn;
export const getUser = (state: AuthState) => state.user;
