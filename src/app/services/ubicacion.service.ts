import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento/departamento.model';
import { Municipio } from '../models/municipio/municipio.model';
import { ConsultaMunicipio } from '../models/parametros/consultaMunicipio.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private urlBase = environment.urlback;

  constructor(private http: HttpClient) { }

  obtenerDepartamento(): Observable<Departamento[]> {
    return this.http.post<Departamento[]>(this.urlBase + 'ubicacion/lista_departamento', null);
  }

  obtenerMunicipio(param: ConsultaMunicipio): Observable<Municipio[]> {
    return this.http.post<Municipio[]>(this.urlBase + 'ubicacion/lista_municipio', param);
  }


}
