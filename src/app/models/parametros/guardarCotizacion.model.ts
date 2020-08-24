export class GuardarCotizacion {
  constructor(
    public codigo_proveedor?: string,
    public nombre_cotizante?: string,
    public apellido_cotizante?: string,
    public telefono_cotizante?: string,
    public email_cotizante?: string,
    public cod_depto?: string,
    public cod_municipio?: string,
    public direccion?: string,
    public observaciones?: string
  ) {}
}
