import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // not used in production
import { reducers, metaReducers, CustomSerializer } from './store';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutes,
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, { metaReducers }), // Right to left order of execution
    StoreDevtoolsModule.instrument({ name: 'maltar-music-app', maxAge: 25 }),
  ],
  providers: [
    AuthGuard,
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
