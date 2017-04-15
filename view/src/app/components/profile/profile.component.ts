import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { MessageService } from '../../services/message/message.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  message: String; // should be an array

  constructor(
    private _authService:AuthService, 
    private _router:Router,
    private _messageService:MessageService,
    private _flashMessage:FlashMessagesService
  ) {  }

  ngOnInit() {
    this._authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  addMessage(){
    console.log(this.message);
    const message = {
      content: this.message
    }

    this._messageService.saveMessage(message).subscribe(
      () => this._flashMessage.show('Your message was saved!!', { cssClass: 'alert-success', timeout: 3000 }),
      error => this._flashMessage.show('Your message was not saved!!', { cssClass: 'alert-danger', timeout: 3000 })
    );
  }

  // File uploads
  public uploader:FileUploader = new FileUploader({url:'http://localhost:5000/upload'});

}
