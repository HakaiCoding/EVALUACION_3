import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocinasService } from '../services/cocinas.service';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {

  newPrice: string = "0";

  refCocina: any;

  cocinas: any[] = [];

  modPrice(ref: number) {
    if (confirm("¿Estás seguro de querer modificar el precio?")) {
      this.cocinas.forEach(valor => {
        if (valor.ref == ref) {
          valor.price = parseInt(this.newPrice);
        }
      });
      alert("Precio modificado");
    } else {
      alert("No se ha modificado el precio");
    }
    console.table(this.cocinas);
  }



  constructor(private cocinasService: CocinasService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cocinas = this.cocinasService.getCocinas();
    this.refCocina = this.activateRoute.snapshot.params['ref'];
  }

}
