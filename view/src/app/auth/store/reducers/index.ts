import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../../store/reducers';

export interface AuthState {
  status: fromAuth.AuthState;
  // loginPage: fromLogin.LoginState;
}

export interface State extends fromRoot.AppState {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
  // loginPage: fromLogin.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

// export const selectLoginPageState = createSelector(
//   selectAuthState,
//   (state: AuthState) => state.loginPage
// );

// export const getLoginPageError = createSelector(
//   selectLoginPageState,
//   fromLogin.getError
// );

// export const getLoginPagePending = createSelector(
//   selectLoginPageState,
//   fromLogin.getPending
// );
