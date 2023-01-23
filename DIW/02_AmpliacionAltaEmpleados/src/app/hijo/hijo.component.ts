import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Empleado } from 'src/Models/empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() i: number = 0;
  @Input() empleado: Empleado;

  azulPares(num: any) {
    if (num % 2 !== 0) {
      return "blue";
    }
    else {
      return "black";
    }
  }

  ttest = 'appmarkTarget';
  test() {
    return this.ttest
  }

  arrayCaract = [''];
  anadirCaract(caract: string) {
    this.miServicio.muestraMensaje(`La característica ${caract} ha sido añadida para el empleado ${this.empleado.name} ${this.empleado.surname}`);
    this.arrayCaract.push(caract);
  }

  constructor(private miServicio: ServicioEmpleadosService) {};

  ngOnInit(): void {
  }
}

