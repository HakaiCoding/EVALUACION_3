import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  copySong: any = {};
  playlist: any = [];


  addToList(songName: any, songSrc: any, songStatus: any) {
    this.copySong = { name: songName, src: songSrc };

    // If this.copySong not exists in this.playlist, add it
    if (!this.playlist.find((song: any) => song.name === this.copySong.name)) {
      this.playlist.push(this.copySong);

      // Find in the aray this.songs the song with the same name as this.copySong and change its status
      this.songs.find((song: any) => song.name === this.copySong.name).status = "../../assets/minus.png";
    }
    // If this.copySong exists in this.playlist, remove it
    else {
      // Find in the aray this.songs the song with the same name as this.copySong and change its status
      this.songs.find((song: any) => song.name === this.copySong.name).status = "../../assets/plus.png";

      this.playlist = this.playlist.filter((song: any) => song.name !== this.copySong.name);

    }
  }

  newPlaylist() {
    const playlistJSON = JSON.stringify(this.playlist);
    this.router.navigate(['/playlist'], { queryParams: { playlist: playlistJSON } });
  }


  songs: any = [];

  constructor(private songsService: SongsService, private router: Router) { }

  ngOnInit(): void {
    this.songs = this.songsService.getSongs();
  } 

}
