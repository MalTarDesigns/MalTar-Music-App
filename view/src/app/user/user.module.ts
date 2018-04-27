import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user-service/user.service';

const routes: Routes = [
  { path: 'news-feed', component: NewsFeedComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NewsFeedComponent, ProfileComponent],
  providers: [UserService],
})
export class UserModule { }
