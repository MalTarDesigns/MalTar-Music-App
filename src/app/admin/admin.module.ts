import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AdminComponent { }

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [

        ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
