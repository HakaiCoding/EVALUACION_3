import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RouterModule, Routes } from '@angular/router';

const rutas : Routes = [
  { path: '', component: MusicComponent },
  { path: 'playlist', component: PlaylistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
