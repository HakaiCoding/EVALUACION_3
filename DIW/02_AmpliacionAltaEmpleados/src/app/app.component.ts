import { Component } from '@angular/core';
import { Empleado } from '../Models/empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private miServicio : ServicioEmpleadosService) {};

  title = 'Empleados';
  apellidosEmpleados: any = ["Beltrán", "González", "Pérez"];
  // mensaje = "";

  mariaBeltran = new Empleado("María", "Beltrán", "Directora", "3000");
  martaGonzalez = new Empleado("Marta", "González", "Coordinadora", "2000");
  pedroPerez = new Empleado("Pedro", "Pérez", "Botones", "1500");

  empleados: Array<Empleado> = new Array(this.mariaBeltran, this.martaGonzalez, this.pedroPerez);

  crearEmpleado(name: String, surname: String, rol: String, salary: String) {
    let newEmpleado = new Empleado(name, surname, rol, salary);
    let testSurname: String = newEmpleado.surname;
    let checkSurname = this.apellidosEmpleados.includes(testSurname);

    if (checkSurname !== true) {
      this.miServicio.muestraMensaje(`El empleado ${newEmpleado.name} ha sido dado de alta`);
      this.apellidosEmpleados.push(testSurname);
      this.empleados.push(newEmpleado);
    }
    else {
      alert(`El apellido ${testSurname} ya está en uso`);
      // this.mensaje = `El apellido ${testSurname} ya está en uso`;
    }
  }

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
  
}


