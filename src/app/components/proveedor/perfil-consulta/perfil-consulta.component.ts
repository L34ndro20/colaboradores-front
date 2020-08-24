import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona/persona.model';
import { Proveedor } from 'src/app/models/proveedor/proveedor.model';

@Component({
  selector: 'app-perfil-consulta',
  templateUrl: './perfil-consulta.component.html',
  styleUrls: ['./perfil-consulta.component.scss']
})
export class PerfilConsultaComponent implements OnInit {

  subscripcion: Subscription;
  proveedor: Proveedor;
  constructor(private proveedorService: ProveedorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscripcion = this.proveedorService.obtenerParametrosEnMemoria().subscribe(
      param => {
        this.proveedorService.obtenerPerfil(param).subscribe(data => {
          this.proveedor = data;
        });
      });
  }

  contratar() {
    this.router.navigate(['/perfil/contrato'], {relativeTo: this.route});
  }
}
