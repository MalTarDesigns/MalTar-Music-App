import { UserActions, UserActionTypes  } from './user.actions';

export interface UserState {
  loaded: boolean;
  loading: boolean;
  error: string;
  email: string;
  uid: string;
  role?: string;
  avatar?: string;
}

export const initialState: UserState = {
  loaded: false,
  loading: false,
  error: null,
  email: null,
  uid: null,
  role: 'user',
  avatar: 'http://via.placeholder.com/140x100'
}

export function reducer(state = initialState, action: UserActions) {
  switch (action.type) {

    case UserActionTypes.LoadUser: {
      return {
        ...state,
        loading: true,
      }
    }

    case UserActionTypes.AddUserSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        email: action.payload.email,
        uid: action.payload.uid,
        role: action.payload.role,
        avatar: action.payload.avatar
      }
    }

    case UserActionTypes.AddUserFail: {
      return {
        ...state,
        error: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
