import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users;
  constructor(private userServie: UserService) { }

  ngOnInit() {
    this.users = this.userServie.getusers();
    this.users.subscribe(res => console.log(res));
  }

}
