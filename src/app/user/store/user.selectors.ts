import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

// export const selectUserStatusState = createSelector(selectUserState, (state: any) => state.status);
