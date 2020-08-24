import { Persona } from '../persona/persona.model';
import { Servicio } from './servicio.model';

export class Proveedor {
  constructor(
    public persona: Persona,
    public servicio: Servicio[]
    ) { }
}
