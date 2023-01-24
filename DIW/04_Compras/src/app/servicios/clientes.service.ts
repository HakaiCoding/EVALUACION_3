import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: any = [
    {
      codCliente: 1,
      nombre: 'Victor',
      direccion: 'Calle de la Luna, 1',
      email: 'victor@gmail.com',
      NIF_proveedor_energia: 'B12345678'
    },
    {
      codCliente: 2,
      nombre: 'Ana',
      direccion: 'Calle de la Luna, 2',
      email: 'ana@gmail.com',
      NIF_proveedor_energia: 'B87654321'
    },
    {
      codCliente: 3,
      nombre: 'Juan',
      direccion: 'Calle de la Luna, 3',
      email: 'juan@gmail.com',
      NIF_proveedor_energia: 'B12345678'
    }
  ]
  
  getClientes() {
    return this.clientes;
  }


  constructor() { }
}
