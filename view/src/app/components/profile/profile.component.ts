import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { MessageService } from '../../services/message/message.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Message } from '../../interfaces/message'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  messages: Message[];
  content: String;

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
    
    this._messageService.getMessages()
      .subscribe(messages => {
        this.messages = messages;
    });

  }// ngOnInit end

  addMessage(event){
    event.preventDefault();
    var newMessage = {
      content: this.content
    }

    this._messageService.saveMessage(newMessage)
      .subscribe(message => {
        this.messages.push(newMessage);
        this.content = "";
      });
  }

  // File uploads
  public uploader:FileUploader = new FileUploader({url:'http://localhost:5000/upload'});

}
