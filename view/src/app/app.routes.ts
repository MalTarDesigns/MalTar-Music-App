import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';

// TODO: Added to module

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'signup', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
        // {path: 'about', component: AboutComponent},
        // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
        // {path: 'pricing', component: PricingComponent},
        // {path: 'contact', component: ContactComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {}

