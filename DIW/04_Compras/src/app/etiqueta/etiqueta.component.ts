import { Component, OnInit, Input } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';


@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {

  proveedores: any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
