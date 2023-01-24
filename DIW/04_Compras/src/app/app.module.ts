import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './servicios/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    EtiquetaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProveedoresService, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
