import { Component, OnInit, Input } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //Variable y Funcion que guarda el CIF cuando se clicka en Mostrar datos proveedor
  cifProveedorCliente: any;
  getCifProveedorCliente(cif: any) {
    this.cifProveedorCliente = cif;
    this.showMoreInfo = false;
  }

  //Variable y funcion para mostrar mas o menos info del proveedor
  showMoreInfo: boolean = false;
  toggleShowMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

  //Input que recibe el array de proveedores desde el componente padre
  @Input() proveedores: any;

  //Inyección de ClientesService (Array de clientes)
  clientes: any;

  constructor(private clientesService: ClientesService) { }


  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();

  }

}
