import { Component, OnInit } from '@angular/core';
import { CocinasService } from '../services/cocinas.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  cocinas: any[] = [];

  constructor(private cocinasService: CocinasService) {
    this.cocinas = this.cocinasService.getCocinas();
  }

  ngOnInit(): void {
  }

}
