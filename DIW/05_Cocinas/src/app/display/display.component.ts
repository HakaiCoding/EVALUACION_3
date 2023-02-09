import { Component, OnInit } from '@angular/core';
import { CocinasService } from '../services/cocinas.service';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  refCocina: any;

  cocinas: any[] = [];

  goBack() {
    this.location.back();
  }

  precio(cocina: number) {
    this.router.navigate(['/precio', cocina]); 
  }

  constructor(private cocinasService: CocinasService, private activateRoute: ActivatedRoute, private location: Location, private router: Router) {
    this.cocinas = this.cocinasService.getCocinas();
   }

  ngOnInit(): void {
    this.refCocina = this.activateRoute.snapshot.params['ref'];
  }

}
