import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {


  //Input que recibe el CIF del proveedor desde el componente Proveedores
  @Input() cifProveedor: any;

  //Input que recibe variable booleana desde el componente Proveedores para manejar la visibilidad del componente Etiqueta
  @Input() toggleImprimirEtiqueta: boolean = false;


  //Input que recibe el array de proveedores desde el componente Proveedores
  @Input() proveedores: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
