import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { Subscription } from 'rxjs';
import { Departamento } from 'src/app/models/departamento/departamento.model';
import { Municipio } from 'src/app/models/municipio/municipio.model';
import { ConsultaMunicipio } from 'src/app/models/parametros/consultaMunicipio.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { GuardarCotizacion } from 'src/app/models/parametros/guardarCotizacion.model';
import swal from'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {

  subscripcion: Subscription;
  listaDepartamento: Departamento[];
  listaMunicipio: Municipio[];
  crearCotizacionForm: FormGroup;
  paramGuardar: GuardarCotizacion;

  constructor(private ubicacionService: UbicacionService,
              private provedorService: ProveedorService,
              private router: Router) { }

  ngOnInit(): void {
    this.construirFormulario();
    this.consultaDepartamento();
  }

  guardarCotizacion() {
    if (this.crearCotizacionForm.valid) {
        this.paramGuardar = new GuardarCotizacion();
        this.paramGuardar.codigo_proveedor = "23";
        this.paramGuardar.nombre_cotizante = this.nombre.value;
        this.paramGuardar.apellido_cotizante = this.apellido.value;
        this.paramGuardar.telefono_cotizante = this.telefono.value;
        this.paramGuardar.email_cotizante = this.email.value;
        this.paramGuardar.cod_depto = this.codigoDepto.value;
        this.paramGuardar.cod_municipio = this.codigoMunicipio.value;
        this.paramGuardar.direccion = this.direccion.value;
        this.paramGuardar.observaciones = this.descripcion.value;

        this.subscripcion = this.provedorService.guardarCotizacion(this.paramGuardar).subscribe(
          data => {
            swal.fire('', 'Registro Exitoso', 'success')
              .then(() => this.router.navigate(['../']));
            this.limpiarCamposCotizacion();
          }
        )
    } else {
      swal.fire('', 'Ooops! recuerda digitar todos los datos', 'warning');
    }
  }

  limpiarCamposCotizacion() {
    this.nombre.setValue(null);
    this.apellido.setValue(null);
    this.telefono.setValue(null);
    this.email.setValue(null);
    this.codigoDepto.setValue(null);
    this.codigoMunicipio.setValue(null);
    this.direccion.setValue(null);
    this.descripcion.setValue(null);
  }

  consultaDepartamento() {
    this.subscripcion = this.ubicacionService.obtenerDepartamento().subscribe(
      data => {
          this.listaDepartamento = data;
      });
  }

  consultaMunicipio(parametros: ConsultaMunicipio) {
    this.subscripcion = this.ubicacionService.obtenerMunicipio(parametros).subscribe(
      data => {
          this.listaMunicipio = null;
          this.listaMunicipio = data;
      });
  }

  public onChange(value: any) {
    this.listaMunicipio = [];
    if (value != null) {
      const paraDepartamento = new ConsultaMunicipio(value.codigo);
      this.consultaMunicipio(paraDepartamento);
    }
  }

  construirFormulario() {
    this.crearCotizacionForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email]),
      codigoDepto: new FormControl(null, Validators.required),
      codigoMunicipio: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    });
  }

  get nombre() { return this.crearCotizacionForm.get('nombre'); }
  get apellido() { return this.crearCotizacionForm.get('apellido'); }
  get telefono() { return this.crearCotizacionForm.get('telefono'); }
  get email() { return this.crearCotizacionForm.get('email'); }
  get codigoDepto() { return this.crearCotizacionForm.get('codigoDepto'); }
  get codigoMunicipio() { return this.crearCotizacionForm.get('codigoMunicipio'); }
  get direccion() { return this.crearCotizacionForm.get('direccion'); }
  get descripcion() { return this.crearCotizacionForm.get('descripcion'); }
}
