import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // not used in production
import { reducers, CustomSerializer } from './store';
import { metaReducers } from './store/reducers';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
