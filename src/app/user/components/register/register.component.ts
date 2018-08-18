import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/store';
import { UserService } from '../../../user/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
    this.userService.adduser({ email: user.email.toLowerCase() });
    this.store.dispatch(new fromAuth.Register({
      email: user.email,
      password: user.password
    }));
  }

}
