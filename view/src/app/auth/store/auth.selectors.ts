import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getLoggedIn = createSelector(selectAuthState,
  (state: AuthState) => state.loggedIn
);

export const getUser = createSelector(selectAuthState,
  (state: AuthState) => state.user
);

export const getError = createSelector(selectAuthState,
  (state: AuthState) => state.error
);

