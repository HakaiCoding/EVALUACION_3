import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs = [
    { name: 'In My Head', src: 'assets/InMyHead.mp3' },
    { name: 'Righteous', src: 'assets/Righteous.mp3' },
  ];

  getSongs()  {
    return this.songs;
  }


  constructor() { }
}

