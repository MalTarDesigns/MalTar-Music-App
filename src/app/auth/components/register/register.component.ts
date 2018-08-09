import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../store';
import { Observable } from 'rxjs';
import { UserService } from '../../../user/services/user-service/user.service';
import { AddUser } from '../../../user/store/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  errorMessage$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromAuth.AuthState>,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
    // this.errorMessage$ = this.store.select(fromAuth.getAuthError);
  }

  onRegisterSubmit() {
    const user: IAuthenticate = this.registerFormGroup.value;

    this.store.dispatch(new fromAuth.Register({ email: user.email, password: user.password }));
    this.store.dispatch(new AddUser(user));
  }

}
