import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproveedorComponent } from './components/proveedor/listaproveedor/listaproveedor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Spinner } from './core/http-interceptors/spinner/spinner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilConsultaComponent } from './components/proveedor/perfil-consulta/perfil-consulta.component';
import { ContratoComponent } from './components/proveedor/contrato/contrato.component';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


defineLocale('es', esLocale);

@NgModule({
  declarations: [
    AppComponent,
    ListaproveedorComponent,
    BusquedaComponent,
    PerfilConsultaComponent,
    ContratoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('es');
  }
 }
