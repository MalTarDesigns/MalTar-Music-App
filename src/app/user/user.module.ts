import { NgModule, Component } from '@angular/core';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user-service/user.service';
import { SharedModule } from '../shared/shared.module';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { StoreModule } from '@ngrx/store';
import { reducer, UserEffects } from './store';
import { MaterialModule } from '../material.module';
import { AuthGuard } from '../auth/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackCardComponent } from './components/track-card/track-card.component';

@Component({
  selector: 'app-user',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class UserComponent { }

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'news-feed', component: NewsFeedComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    NewsFeedComponent,
    ProfileComponent,
    ProfileTabsComponent,
    TrackCardComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserService, AuthGuard],
})
export class UserModule { }
