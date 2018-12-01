import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/store';
import { UserService } from '../../../user/services/user-service/user.service';
import { ErrorStateMatcher } from '@angular/material';
import { getAuthError } from '../../../auth/store';

// Ref: https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  errorMessage$: Observable<string>;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private store: Store<fromAuth.AuthState>,
    private userService: UserService
  ) { }

  ngOnInit() {
    // TODO: Add some custom validation
    this.registerFormGroup = this.fb.group({
      // name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    }, { validator: this.checkPasswords });

    this.errorMessage$ = this.store.select(getAuthError);
    this.errorMessage$.subscribe(res => console.log(res))
  }

  onRegisterSubmit() {
    const user: IAuthenticate = this.registerFormGroup.value;
    this.userService.adduser({ email: user.email.toLowerCase() });
    this.store.dispatch(new fromAuth.Register({
      email: user.email,
      password: user.password
    }));
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }

}
