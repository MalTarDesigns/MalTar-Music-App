import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(selectAuthState, (state: any) => state.status);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  (state: AuthState) => state.loggedIn
);

export const getUser = createSelector(selectAuthStatusState, (state: AuthState) => state.user);

export const getError = createSelector(selectAuthStatusState, (state: AuthState) => state.error);
