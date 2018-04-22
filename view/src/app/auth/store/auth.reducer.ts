import { ActionReducer } from '@ngrx/store';
import * as fromActions from './auth.actions';

export const initialState: AuthState = {
  pending: false,
  loggedIn: false,
  user: null,
  error: null
};

export const Authreducer: ActionReducer<AuthState> = (state = initialState, action: fromActions.Actions) => {
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
        user: action.payload.user
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
      return state;
    }

    default: {
      return state;
    }
  }
}
