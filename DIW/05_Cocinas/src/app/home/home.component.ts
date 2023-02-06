import { Component, OnInit } from '@angular/core';
import { CocinasService } from '../services/cocinas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cocinas: any[] = [];

  constructor(private cocinasService: CocinasService) {
    this.cocinas = this.cocinasService.getCocinas();
  }

  ngOnInit(): void {
  }

}
