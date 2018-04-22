import { ActionReducer } from '@ngrx/store';
import * as fromActions from '../actions';

const initialState: Errors = {
  effectError: null
};

/**
 * ErrorsReducer keeps track of any service level Error
 *
 * @param state - the current state
 * @param action - the action being dispatched
 * @returns Errors - service level Errors
 */
export const ErrorsReducer: ActionReducer<Errors> = (
  state: Errors = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case fromActions.EFFECT_ERROR:
      return {
        ...state,
        effectError: action.payload.error
      };
    default:
      return state;
  }
};
