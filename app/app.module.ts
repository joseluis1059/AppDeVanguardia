import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumenComponent } from './resumen/resumen.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { AgregarComponent } from './transacciones/agregar/agregar.component';
import { ButtonComponent } from './transacciones/agregar/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    CuentasComponent,
    TransaccionesComponent,
    AgregarComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
