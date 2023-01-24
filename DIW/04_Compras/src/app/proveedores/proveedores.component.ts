import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  //Variable y funcion que guarda el CIF cuando se ejectua el evento click del botón
  cifProveedor: any = '';
  getCifProveedor(cif: any) {
    this.cifProveedor = cif;
  }

  //Variable y funcion que oculta o muestra el componente etiqueta
  toggleImprimirEtiqueta: boolean = false;
  toggleButton() {
    this.toggleImprimirEtiqueta = !this.toggleImprimirEtiqueta;
  }

  //Inyección de ProveedoresService (Array de proveedores)
  proveedores: any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }
}

