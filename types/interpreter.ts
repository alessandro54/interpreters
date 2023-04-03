import type { Language } from "./language";
import { Residence } from "./residence";
import type { Variety } from "./variety";

export type Interpreter = {
  idPersona: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  dni: string;
  telefono1: string;
  telefono2?: string;
  telefono3?: string;
  email: string;
  sexo: string;
  fechaNacimiento: number;
  ruc: string;
  curso1: string;
  categoria1: string;
  especialidad1: string;
  especialidad2?: string;
  resolucionViceministerial1: string;
  codigoRegistro1: string;
  gradoInstruccion: string;
  especialidadEducacion: string;
  flagCondicionEspecial: string;
  estado: string;
  direccion: string;
  variedad1: Variety;
  variedad2?: Variety;
  lengua1: Language;
  lengua2?: Language;
  ubigeoResidencia?: Residence;
  descripcionSexo: string;
  descripcionEspecialidad1: string;
  descripcionEspecialidad2?: string;
  descripcionCategoria1: string;
  descripcionCategoria2?: string;
}
