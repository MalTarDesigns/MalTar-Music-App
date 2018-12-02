import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GlobalErrorHandler } from './services/global.error';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { UploadMusicBtnComponent } from './components/upload-music-btn/upload-music-btn.component';
import { UploadImageBtnComponent } from './components/upload-image-btn/upload-image-btn.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    UploadMusicBtnComponent,
    UploadImageBtnComponent
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    UploadMusicBtnComponent,
    UploadImageBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // TODO: Move navbar and footer compoment then remove this import
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    MaterialModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class SharedModule { }
