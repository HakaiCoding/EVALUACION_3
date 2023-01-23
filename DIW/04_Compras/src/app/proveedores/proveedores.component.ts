import { Component, OnInit, Input } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  cifProveedor: any = '';

  getCifProveedor(cif: any) {
    this.cifProveedor = cif;
  }

  proveedores: any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }
}

