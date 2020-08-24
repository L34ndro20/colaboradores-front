import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IglesiaService } from 'src/app/services/iglesia.service';
import { Iglesia } from 'src/app/models/iglesia/iglesia.model';
import { ConsultaProveedor } from 'src/app/models/parametros/consultaProveedor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/proveedor/servicio.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  subscripcion: Subscription;
  iglesias: Iglesia[];
  servicios: Servicio[];
  codigoIglesia: string;
  codigoServicio: string;

  constructor(private iglesiaService: IglesiaService,
              private router: Router,
              private route: ActivatedRoute,
              private proveedorService: ProveedorService,
              private servicioServi: ServicioService) { }

  ngOnInit() {
    this.consultarIglesia();
    this.consultarServicio();
  }

  irDetalle() {
    const paraObservable = new ConsultaProveedor(null, this.codigoIglesia, this.codigoServicio);
    this.proveedorService.guardarParametrosEnMemoria(paraObservable);
    this.router.navigate(['/busqueda/filtro'], {relativeTo: this.route});
  }

  consultarIglesia() {
    this.iglesiaService.obtenerIglesias().subscribe( data => {
      this.iglesias = data;
    });
  }

  consultarServicio() {
    this.servicioServi.obtenerServicio().subscribe( data => {
      this.servicios = data;
    });
  }
}
