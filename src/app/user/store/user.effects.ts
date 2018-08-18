import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AddUserSuccess, UserActionTypes, LoadUserSuccess } from './user.actions';
import { EffectError } from '../../store/actions';
import { UserService } from '../services/user-service/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userServive: UserService) { }

  @Effect()
  addUser$ = this.actions$.pipe(
    ofType<LoadUserSuccess>(UserActionTypes.LoadUserSuccess),
    map(action => action.payload),
    map((user: IUser) => {
      this.userServive.adduser(user);
      return [
        new AddUserSuccess(user),
        new EffectError({ error: {} })
      ];
    })
  );
}
