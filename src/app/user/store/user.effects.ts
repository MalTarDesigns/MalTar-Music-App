import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as userAction from './user.actions';
import { AddUserSuccess } from './user.actions';
import { EffectError } from '../../store/actions';
import { UserService } from '../services/user-service/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userServive: UserService) { }

  @Effect()
  addUser$ = this.actions$.pipe(
    ofType(userAction.ADD_USER),
    map((action: userAction.AddUser) => action.payload),
    map((user: IUser) => {
      debugger;
      this.userServive.adduser(user);
      return [
        new AddUserSuccess({ email: user.email }),
        new EffectError({ error: {} })
      ];
    })
  );
}
