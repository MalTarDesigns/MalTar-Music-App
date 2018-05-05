import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthStore from '../../store';
import * as fromAuth from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  errorMessage$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store<AuthStore.State>) {}

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    // this.errorMessage$ = this.store.select(fromAuth.getAuthError);

  }

  onRegisterSubmit(): void {
    const user: IAuthenticate = this.registerFormGroup.value;
    this.store.dispatch(new AuthStore.Register({ email: user.email, password: user.password }));
  }

}
