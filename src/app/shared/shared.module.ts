import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GlobalErrorHandler } from './service/global.error';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';

const routes: Routes = [];
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
