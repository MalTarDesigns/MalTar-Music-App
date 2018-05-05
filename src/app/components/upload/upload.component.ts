import { Component, OnInit } from '@angular/core';
// import {MdDialog} from '@angular/material';
// import { PopupComponent } from '../../components/popup/popup.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    // public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    // this.dialog.open(PopupComponent);
  }

}
