//Dependent imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutesModule } from './app.routes';
import { FlashMessagesModule } from 'angular2-flash-messages'; // https://www.npmjs.com/package/angular2-flash-messages
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload'; // https://github.com/rahil471/File-upload-Angular2-Nodejs

//Added modules
import { MusicPlayerModule } from './components/music-player/music-player.module';

//Services
import { BeatsService } from './services/beats/beats.service';
import { SpotifyService } from './services/spotify/spotify.service';
import { AuthService } from './services/auth/auth.service';
import { ValidateService } from './services/validate/validate.service';
import { MessageService } from './services/message/message.service';

import { AuthGuard } from './guards/auth.guard';

//Components
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PostsComponent } from './components/posts/posts.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    PostsComponent,
    AboutComponent,
    SearchComponent,
    ContactComponent,
    HomeComponent,
    ArtistComponent,
    AlbumComponent,
    AudioPlayerComponent,
    FooterComponent,
    SubscribeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PricingComponent,
    ProfileComponent,
    FileSelectDirective,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
    MusicPlayerModule,
    FlashMessagesModule
  ],
  providers: [
    BeatsService, 
    SpotifyService, 
    AuthService, 
    ValidateService,
    AuthGuard,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
