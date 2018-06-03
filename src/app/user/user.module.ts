import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user-service/user.service';
import { SharedModule } from '../shared/shared.module';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store';

@Component({
  selector: 'app-user',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class UserComponent { }

const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'news-feed', component: NewsFeedComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SharedModule,
    StoreModule.forFeature('user', userReducer),
  ],
  declarations: [
    UserComponent,
    NewsFeedComponent,
    ProfileComponent,
    ProfileTabsComponent
  ],
  providers: [UserService],
})
export class UserModule { }
