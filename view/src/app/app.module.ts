import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { StoreModule } from '@ngrx/store';
import { metaReducers } from './store/reducers/root.reducer';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase)
    StoreModule.forRoot({ }, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
