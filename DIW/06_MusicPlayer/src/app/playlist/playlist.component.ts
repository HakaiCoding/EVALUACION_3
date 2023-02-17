import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist: any[] = [];


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const playlistJSON = this.route.snapshot.queryParams['playlist'];
    this.playlist = JSON.parse(playlistJSON);
  }

}
