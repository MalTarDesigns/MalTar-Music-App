import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages'; // https://www.npmjs.com/package/angular2-flash-messages
import { ValidateService } from '../../services/validate/validate.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private _validateService: ValidateService,
    private _flashMessage: FlashMessagesService,
    private _authService: AuthService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    // Required Fields
    if(!this._validateService.validateRegister(user)) {
      console.log('Please fill in all fields');
      this._flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate Email
    if(!this._validateService.validateEmail(user.email)) {
      //console.log('Please use a valid email');
      this._flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register User
    this._authService.registerUser(user).subscribe(data =>{
      if(data.success){
        this._flashMessage.show('Your registration was successful', { cssClass: 'alert-success', timeout: 3000 });
        this._router.navigate(['login']);
      }else {
        this._flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this._router.navigate(['register']);
      }
    })     
  } // onRegisterSubmit() - end

}
