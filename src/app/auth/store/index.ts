export * from './auth.reducer';
export * from './auth.actions';
export * from './auth.selectors';
export * from './auth.effects';

import * as fromRoot from '../../store';
import { Authreducer } from './auth.reducer';

export interface State extends fromRoot.AppState {
  auth: AuthState;
}

export const reducers = {
  status: Authreducer
};
