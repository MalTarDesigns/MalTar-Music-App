import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Login, getAuthError } from '../../../auth/store';
import { DynamicFormComponent } from '../../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  // loginFormGroup: FormGroup;
  // errorMessage$: Observable<string>;

  // constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    //   this.loginFormGroup = this.fb.group({
    //     email: ['', [Validators.email, Validators.required]],
    //     password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    //   });

    //   this.errorMessage$ = this.store.select(getAuthError);
    //   this.errorMessage$.subscribe(res => console.log(res))
  }

  // onLoginSubmit(): void {
  //   const user: IAuthenticate = this.loginFormGroup.value;
  //   this.store.dispatch(new Login({ email: user.email, password: user.password }));
  // }

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your Email',
      validation: [Validators.required, Validators.email, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Password',
      name: 'last_name',
      placeholder: 'Enter your Password',
      validation: [Validators.required, Validators.minLength(4)]
    },
    // {
    //   type: 'select',
    //   label: 'Favorite Food',
    //   name: 'food',
    //   options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
    //   placeholder: 'Select an option',
    //   validation: [Validators.required]
    // },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    // this.form.setValue('first_name', 'Todd Motto');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

  cancel() {
    console.log('clicked');

  }
}
