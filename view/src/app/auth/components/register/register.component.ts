import { Component, OnInit } from '@angular/core';
// import { FlashMessagesService } from 'angular2-flash-messages'; // https://www.npmjs.com/package/angular2-flash-messages
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    // private _flashMessage: FlashMessagesService,
    // private _authService: AuthService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    console.log(user);

    // Register User
    // this._authService.registerUser(user).subscribe(data => {
    //   if (data.success) {
    //     this._flashMessage.show('Your registration was successful', { cssClass: 'alert-success', timeout: 3000 });
    //     this._router.navigate(['login']);
    //   } else {
    //     this._flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    //     this._router.navigate(['register']);
    //   }
    // });
  } // onRegisterSubmit() - end

}
