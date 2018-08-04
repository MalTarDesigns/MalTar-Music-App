import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth-service/auth.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, AuthEffects } from './store';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService],
  exports: [AngularFireAuthModule]
})
export class AuthModule {}
