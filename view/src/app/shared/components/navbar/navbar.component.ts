import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth-service/auth.service';
import {Router} from '@angular/router';
// import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
      // private _authService: AuthService,
      private _router: Router,
      // private _flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    console.log('log out');
    // this._authService.logout();
    //  this._flashMessage.show('You are now logged out', {
    //       cssClass: 'alert-success',
    //       timeout: 3000
    //     });
        // this._router.navigate(['login']);
        // return false;
  }

}