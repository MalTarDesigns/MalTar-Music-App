import { Component, OnInit } from '@angular/core';
// import { FlashMessagesService } from 'angular2-flash-messages'; // https://www.npmjs.com/package/angular2-flash-messages
// import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(
    // private flashMessage: FlashMessagesService,
    // private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  onRegisterSubmit() {
    console.log(this.registerFormGroup.value);

    const user: IUser = this.registerFormGroup.value;

    // this.authService.registerUser(user).subscribe(data => {
    //   console.log(data);
    //   // if (data.success) {
    //   //   this.flashMessage.show('Your registration was successful', {
    //   //     cssClass: 'alert-success',
    //   //     timeout: 3000
    //   //   });
    //   //   this.router.navigate(['login']);
    //   // } else {
    //   //   this.flashMessage.show('Something went wrong', {
    //   //     cssClass: 'alert-danger',
    //   //     timeout: 3000
    //   //   });
    //   //   this.router.navigate(['register']);
    //   // }
    // });
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }

}
