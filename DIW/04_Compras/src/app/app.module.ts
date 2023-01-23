import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    EtiquetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
