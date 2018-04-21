import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutes {}
