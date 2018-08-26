import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent, ProfileComponent } from './components';

const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
];

/**
 * NgModule
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutes { }
