import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Subscription } from 'rxjs';
import { Proveedor } from 'src/app/models/proveedor/proveedor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConsultaProveedor} from 'src/app/models/parametros/consultaProveedor.model';


@Component({
  selector: 'app-listaproveedor',
  templateUrl: './listaproveedor.component.html',
  styleUrls: ['./listaproveedor.component.scss']
})
export class ListaproveedorComponent implements OnInit {

  subscripcion: Subscription;
  proveedores: Proveedor[];
  constructor(private proveedorService: ProveedorService,
              private router: Router,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.subscripcion = this.proveedorService.obtenerParametrosEnMemoria().subscribe(
      param => {
        this.proveedorService.obtenerProveedor(param).subscribe(data => {
          this.proveedores = data;
        });
      });
  }


  verperfil(idpersona: string) {
    const paraObservable = new ConsultaProveedor(idpersona, null, null);
    this.proveedorService.guardarParametrosEnMemoria(paraObservable);
    this.router.navigate(['/filtro/perfil'], {relativeTo: this.route});
  }
}
