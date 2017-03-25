import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'search', component: SearchComponent},
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

