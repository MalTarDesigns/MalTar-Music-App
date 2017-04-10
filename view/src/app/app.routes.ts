import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
        {path: 'about', component: AboutComponent},
        {path: 'search', component: SearchComponent},
        {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
        {path: 'pricing', component: PricingComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'artist/:id', component: ArtistComponent},
        {path: 'album/:id', component: AlbumComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {}

