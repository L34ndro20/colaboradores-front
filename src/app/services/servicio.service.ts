import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/proveedor/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlBase = environment.urlback;
  constructor(private http: HttpClient) { }

  obtenerServicio(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.urlBase + 'servicio/lista_servicio');
  }
}
