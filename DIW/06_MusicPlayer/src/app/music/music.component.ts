import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  copySong: any = {};
  playlist: any = [];

  addToList(songName: any, songSrc: any) {
    this.copySong = { name: songName, src: songSrc };

    // If this.copySong not exists in this.playlist, add it
    if (!this.playlist.find((song: any) => song.name === this.copySong.name)) {
      this.playlist.push(this.copySong);
      
    }
    // If this.copySong exists in this.playlist, remove it
    else {
      this.playlist = this.playlist.filter((song: any) => song.name !== this.copySong.name);
    }
  }

  songs: any = [];

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songs = this.songsService.getSongs();
  } 

}
