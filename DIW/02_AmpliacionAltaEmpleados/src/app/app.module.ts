import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { directivaLi,markTarget } from './custom.directive';
import { HijoComponent } from './hijo/hijo.component';
import { CaracEmpComponent } from './carac-emp/carac-emp.component';

import { ServicioEmpleadosService } from './servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    directivaLi,
    markTarget,
    HijoComponent,
    CaracEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
