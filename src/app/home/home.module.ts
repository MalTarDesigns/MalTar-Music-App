import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MusicModule } from '../music/music.module';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    MusicModule,
    RouterModule.forChild(homeRoutes)
  ],
})
export class HomeModule { }
