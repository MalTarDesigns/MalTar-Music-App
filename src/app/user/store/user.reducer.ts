import { ActionReducer } from '@ngrx/store';
import * as fromActions from './user.actions';
import { AppState } from '../../store';

export interface State extends AppState {
  user: UserState;
}
export interface UserState {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export const initialState: UserState = {
  loaded: false,
  loading: false,
  ids: []
}

export const userReducer: ActionReducer<UserState> = (state = initialState, action: fromActions.Actions) => {
  switch (action.type) {

    case fromActions.LOAD: {
      return {
        ...state,
        pending: true,
      }
    }

    case fromActions.ADD_USER: {
      return {
        ...state,
      }
    }

    case fromActions.ADD_USER_FAIL: {
      return {
        ...state,
      }
    }

    case fromActions.ADD_USER_SUCCESS: {
      return {
        ...state,
      }
    }

    default: {
      return state;
    }
  }
}
