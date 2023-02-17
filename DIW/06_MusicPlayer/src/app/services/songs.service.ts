import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs = [
    { name: 'InMyHead', src: 'assets/InMyHead.mp3', status: "../../assets/plus.png" },
    { name: 'Righteous', src: 'assets/Righteous.mp3', status: "../../assets/plus.png" },
  ];

  getSongs()  {
    return this.songs;
  }


  constructor() { }
}

