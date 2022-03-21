import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Localidades } from "./Localidades";
import { Negocio } from "./Negocio";

@Index("negocio_propietario_pkey", ["id"], { unique: true })
@Index("idx_3905931167707c89", ["localidadId"], {})
@Index("uniq_390593117d879e4f", ["negocioId"], { unique: true })
@Entity("negocio_propietario", { schema: "licencias_comerciales" })
export class NegocioPropietario {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "negocio_id" })
  negocioId: number;

  @Column("integer", { name: "localidad_id" })
  localidadId: number;

  @Column("character varying", { name: "tipo_persona", length: 1 })
  tipoPersona: string;

  @Column("character varying", {
    name: "nombre",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  nombre: string | null;

  @Column("character varying", {
    name: "apellido_paterno",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  apellidoPaterno: string | null;

  @Column("character varying", {
    name: "apellido_materno",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  apellidoMaterno: string | null;

  @Column("date", { name: "fecha_nacimiento", nullable: true })
  fechaNacimiento: string | null;

  @Column("character varying", { name: "rfc", length: 14 })
  rfc: string;

  @Column("character varying", { name: "calle", length: 120 })
  calle: string;

  @Column("character varying", { name: "colonia", length: 120 })
  colonia: string;

  @Column("character varying", { name: "numero_exterior", length: 10 })
  numeroExterior: string;

  @Column("character varying", { name: "codigo_postal", length: 10 })
  codigoPostal: string;

  @Column("character varying", {
    name: "razon_social",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  razonSocial: string | null;

  @Column("character varying", {
    name: "numero_interior",
    nullable: true,
    length: 5,
    default: () => "NULL::character varying",
  })
  numeroInterior: string | null;

  @Column("character varying", {
    name: "representante_legal_nombre",
    nullable: true,
    length: 60,
    default: () => "NULL::character varying",
  })
  representanteLegalNombre: string | null;

  @Column("character varying", {
    name: "representante_legal_apellido_paterno",
    nullable: true,
    length: 60,
    default: () => "NULL::character varying",
  })
  representanteLegalApellidoPaterno: string | null;

  @Column("character varying", {
    name: "representante_legal_apellido_materno",
    nullable: true,
    length: 60,
    default: () => "NULL::character varying",
  })
  representanteLegalApellidoMaterno: string | null;

  @Column("character varying", {
    name: "curp",
    nullable: true,
    length: 18,
    default: () => "NULL::character varying",
  })
  curp: string | null;

  @Column("character varying", {
    name: "representante_legal_rfc",
    nullable: true,
    length: 13,
    default: () => "NULL::character varying",
  })
  representanteLegalRfc: string | null;

  @Column("character varying", {
    name: "representante_legal_curp",
    nullable: true,
    length: 18,
    default: () => "NULL::character varying",
  })
  representanteLegalCurp: string | null;

  @ManyToOne(
    () => Localidades,
    (localidades) => localidades.negocioPropietarios
  )
  @JoinColumn([{ name: "localidad_id", referencedColumnName: "id" }])
  localidad: Localidades;

  @OneToOne(() => Negocio, (negocio) => negocio.negocioPropietario)
  @JoinColumn([{ name: "negocio_id", referencedColumnName: "id" }])
  negocio: Negocio;
}
