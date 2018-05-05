import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';

import * as fromMaterial from '@angular/material';
import { GlobalErrorHandler } from './service/global.error';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [];
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    fromMaterial.MatButtonModule,
    fromMaterial.MatCardModule,
    fromMaterial.MatMenuModule,
    fromMaterial.MatToolbarModule,
    fromMaterial.MatIconModule,
    fromMaterial.MatFormFieldModule,
    fromMaterial.MatInputModule,
    fromMaterial.MatTabsModule,
    FlexLayoutModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    fromMaterial.MatButtonModule,
    fromMaterial.MatCardModule,
    fromMaterial.MatMenuModule,
    fromMaterial.MatToolbarModule,
    fromMaterial.MatIconModule,
    fromMaterial.MatFormFieldModule,
    fromMaterial.MatInputModule,
    fromMaterial.MatTabsModule,
    FlexLayoutModule
  ],
  providers: [
    AuthGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class SharedModule { }
