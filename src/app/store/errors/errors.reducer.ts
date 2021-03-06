import { ActionReducer } from '@ngrx/store';
import * as fromActions from '../actions';

export interface Errors {
  effectError: string;
}

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
export const errorsReducer: ActionReducer<Errors> = (
  state: Errors = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case fromActions.EFFECT_ERROR:
      return {
        ...state,
        effectError: action.payload
      };
    default:
      return state;
  }
};
