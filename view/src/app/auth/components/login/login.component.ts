import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';
// import { AuthService } from '../../services/auth-service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    // private authService: AuthService,
    private router: Router,
    // private flashMessage: FlashMessagesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  onLoginSubmit() {
    console.log(this.loginFormGroup.value);
    // const user: IUser = this.loginFormGroup.value;
    // this.authService.authenticateUser(user).subscribe(data => {
    //   if (data['success']) {
    //     this.authService.storeUserData(data['token'], data['user']);
    //     this.flashMessage.show('You are now logged in', {
    //       cssClass: 'alert-success',
    //       timeout: 4000});
    //     this.router.navigate(['dashboard']);
    //   } else {
    //     this.flashMessage.show('something went wrong', {
    //       cssClass: 'alert-danger',
    //       timeout: 4000
    //     });
    //     this.router.navigate(['login']);
    //   }
    // });
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }

}
