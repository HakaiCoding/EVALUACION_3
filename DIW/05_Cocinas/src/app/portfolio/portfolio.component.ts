import { Component, OnInit } from '@angular/core';
import { CocinasService } from '../services/cocinas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  cocinas: any[] = [];

  constructor(private cocinasService: CocinasService, private router: Router) {
    this.cocinas = this.cocinasService.getCocinas();
  }

  display(cocina: number) {
   this.router.navigate(['/display', cocina]); 
  }

  ngOnInit(): void {
  }

}
