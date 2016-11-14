import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutesModule } from './app.routes';

import { MusicPlayerModule } from './music-player/music-player.module';

//Services
import { BeatsService } from './services/beats/beats.service';
import { SpotifyService } from './services/spotify/spotify.service';

//Components
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

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
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
    MusicPlayerModule
  ],
  providers: [BeatsService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
