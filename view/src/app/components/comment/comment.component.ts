import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message/message.service';
import { Message } from '../../interfaces/message'

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  messages: Message[];
  content: String;

  constructor(private _messageService:MessageService) { }

  ngOnInit() {
    
    this._messageService.getMessages().subscribe(messages => {
        this.messages = messages;
    });

  }

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

  deleteMessage(){
    console.log('start deleting');
  }


}
