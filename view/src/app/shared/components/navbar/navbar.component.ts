import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../../auth/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  showDropdown = false;

  constructor(private store: Store<fromStore.State>, private _router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.store.select(fromStore.getLoggedIn);
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown
  }

  onLogoutClick() {
    console.log('log out');
    this.store.dispatch(new fromStore.Logout());
  }
}
