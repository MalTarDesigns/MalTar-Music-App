import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth-service/auth.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
