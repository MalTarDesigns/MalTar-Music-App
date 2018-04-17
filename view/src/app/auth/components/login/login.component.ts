import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private store: Store<AuthStore.State>) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  onLoginSubmit(): void {
    // console.log(this.loginFormGroup.value);
    const user: IAuthenticate = this.loginFormGroup.value;
    this.store.dispatch(new AuthStore.Login({ email: user.email, password: user.password }));
  }
}
