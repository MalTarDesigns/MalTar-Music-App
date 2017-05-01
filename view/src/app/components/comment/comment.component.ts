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

  addMessage(){
    var newMessage = {
      content: this.content
  }

  this._messageService.saveMessage(newMessage)
    .subscribe(message => {
      this.content = "";
      this.messages.push(message);
      //Reloads the message array to add the message
      this._messageService.getMessages().subscribe(messages => {
        this.messages = messages;
      });
    });
  }

  deleteMessage(id: any){
    var messages = this.messages;
    this._messageService.deleteMessage(id).subscribe(data => {
      if(data.n == 1) {
        for(var i = 0; i < messages.length; i++) {
          if(messages[i]._id == id) {
            messages.slice(i,1);
          }
        }
      }
      //Reloads the message array to delete the message
      this._messageService.getMessages().subscribe(messages => {
        this.messages = messages;
      });
    });
  }


}
