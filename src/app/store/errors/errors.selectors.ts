import { AppState } from '..';
import { createSelector } from '@ngrx/store';

export const getErrors = (state: AppState) => {
  return state.errors;
};

export const getLoginError = createSelector(getErrors,
  (errors) => {
    return errors.effectError;
  });
