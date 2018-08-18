import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getLoggedIn = createSelector(selectAuthState, (state: AuthState) => state.loggedIn);

export const getError = createSelector(selectAuthState, (state: AuthState) => state.error);
