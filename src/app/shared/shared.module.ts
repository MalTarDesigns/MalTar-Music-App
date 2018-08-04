import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GlobalErrorHandler } from './service/global.error';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [];
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
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
