import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Iglesia } from '../models/iglesia/iglesia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IglesiaService {

  private urlBase = environment.urlback;
  constructor(private http: HttpClient) { }

  obtenerIglesias(): Observable<Iglesia[]> {
    return this.http.get<Iglesia[]>(this.urlBase + 'iglesia/lista_iglesia');
  }
}
