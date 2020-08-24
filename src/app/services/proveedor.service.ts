import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor/proveedor.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultaProveedor } from '../models/parametros/consultaProveedor.model';
import { GuardarCotizacion } from '../models/parametros/guardarCotizacion.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlBase = environment.urlback;

  parametrosBusqueda = new ConsultaProveedor();
  private parametrosSubject = new BehaviorSubject<ConsultaProveedor>(this.parametrosBusqueda);


  constructor(private http: HttpClient) { }

  obtenerProveedor(param: ConsultaProveedor): Observable<Proveedor[]> {
    return this.http.post<Proveedor[]>(this.urlBase + 'proveedor/lista_proveedor', param);
  }

  obtenerPerfil(param: ConsultaProveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.urlBase + 'proveedor/perfil_proveedor', param);
  }

  guardarCotizacion(param: GuardarCotizacion) {
     return this.http.post(this.urlBase + 'cotizacion/guardar', param);
  }

  guardarParametrosEnMemoria(parametros: ConsultaProveedor) {
    this.parametrosBusqueda = parametros;
    this.parametrosSubject.next(parametros);
  }

  obtenerParametrosEnMemoria(): Observable<ConsultaProveedor> {
    return this.parametrosSubject.asObservable();
  }

}
