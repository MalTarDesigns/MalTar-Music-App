import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthGuard } from './guards/auth.guard';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const routes: Routes = [];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard]
})
export class SharedModule { }
