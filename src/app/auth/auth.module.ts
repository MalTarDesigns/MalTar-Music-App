import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth-service/auth.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, AuthEffects } from './store';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService],
  exports: [AngularFireAuthModule]
})
export class AuthModule {}
