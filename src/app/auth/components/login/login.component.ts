import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Login } from '../../store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  errorMessage$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    // this.errorMessage$ = this.store.select(fromAuth.getAuthError);
  }

  onLoginSubmit(): void {
    const user: IAuthenticate = this.loginFormGroup.value;
    this.store.dispatch(new Login({ email: user.email, password: user.password }));
  }
}
