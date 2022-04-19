import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ActEconConNegocio } from "./ActEconConNegocio";
import { GiroComercial } from "./GiroComercial";
import { Localidades } from "./Localidades";
import { PersonalAutoriza } from "./PersonalAutoriza";
import { NegocioPropietario } from "./NegocioPropietario";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Index("idx_eed07684bdb4e849", ["giroComercialId"], {})
@Index("negocio_pkey", ["id"], { unique: true })
@Index("idx_eed0768467707c89", ["localidadId"], {})
@Index("idx_eed07684655b0ef3", ["personalAutorizaId"], {})
@Entity("negocio", { schema: "licencias_comerciales" })
export class Negocio {
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "localidad_id" })
  localidadId: number;

  @Column("integer", { name: "giro_comercial_id" })
  giroComercialId: number;

  @Column("integer", { name: "personal_autoriza_id" })
  personalAutorizaId: number;

  @Column("character varying", { name: "nombre_comercial", length: 255 })
  nombreComercial: string;

  @Column("character varying", { name: "calle", length: 120 })
  calle: string;

  @Column("character varying", { name: "colonia", length: 120 })
  colonia: string;

  @Column("character varying", { name: "numero_exterior", length: 10 })
  numeroExterior: string;

  @Column("character varying", { name: "codigo_postal", length: 10 })
  codigoPostal: string;

  @Column("character varying", {
    name: "numero_interior",
    nullable: true,
    length: 5,
    default: () => "NULL::character varying",
  })
  numeroInterior: string | null;

  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("timestamp without time zone", {
    name: "fecha_actualizacion",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  fechaActualizacion: Date | null;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("date", { name: "fecha_apertura" })
  fechaApertura: string;

  @Column("character varying", { name: "cuenta_catastral", length: 20 })
  cuentaCatastral: string;

  @Column("boolean", { name: "autorizacion_gobernacion" })
  autorizacionGobernacion: boolean;

  @Column("boolean", { name: "autorizacion_desarrollo_urbano" })
  autorizacionDesarrolloUrbano: boolean;

  @Column("boolean", { name: "autorizacion_proteccion_civil" })
  autorizacionProteccionCivil: boolean;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  observaciones: string | null;

  @Column("character varying", {
    name: "folio_licencia_comercial",
    nullable: true,
    length: 70,
    default: () => "NULL::character varying",
  })
  folioLicenciaComercial: string | null;

  @Column("character varying", { name: "latitud", length: 25 })
  latitud: string;

  @Column("character varying", { name: "longitud", length: 25 })
  longitud: string;

  @Column("boolean", { name: "autorizacion_bomberos" })
  autorizacionBomberos: boolean;

  @Column("character varying", {
    name: "numero_oficio_bomberos",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  numeroOficioBomberos: string | null;

  @Column("character varying", {
    name: "oficio_bomberos",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  oficioBomberos: string | null;

  @Column("character varying", {
    name: "numero_oficio_gobernacion",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  numeroOficioGobernacion: string | null;

  @Column("character varying", {
    name: "oficio_gobernacion",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  oficioGobernacion: string | null;

  @Column("character varying", {
    name: "numero_oficio_desarrollo_urbano",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  numeroOficioDesarrolloUrbano: string | null;

  @Column("character varying", {
    name: "oficio_desarrollo_urbano",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  oficioDesarrolloUrbano: string | null;

  @Column("character varying", {
    name: "numero_oficio_proteccion_civil",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  numeroOficioProteccionCivil: string | null;

  @Column("character varying", {
    name: "oficio_proteccion_civil",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  oficioProteccionCivil: string | null;

  @Column("character varying", { name: "status", length: 10 })
  status: string;

  @Column("character varying", {
    name: "libro",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  libro: string | null;

  @Column("character varying", {
    name: "foja",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  foja: string | null;

  @OneToMany(
    () => ActEconConNegocio,
    (actEconConNegocio) => actEconConNegocio.negocio
  )
  actEconConNegocios: ActEconConNegocio[];

  @ManyToOne(() => GiroComercial, (giroComercial) => giroComercial.negocios)
  @JoinColumn([{ name: "giro_comercial_id", referencedColumnName: "id" }])
  giroComercial: GiroComercial;

  @ManyToOne(() => Localidades, (localidades) => localidades.negocios)
  @JoinColumn([{ name: "localidad_id", referencedColumnName: "id" }])
  localidad: Localidades;

  @ManyToOne(
    () => PersonalAutoriza,
    (personalAutoriza) => personalAutoriza.negocios
  )
  @JoinColumn([{ name: "personal_autoriza_id", referencedColumnName: "id" }])
  personalAutoriza: PersonalAutoriza;

  @OneToOne(
    () => NegocioPropietario,
    (negocioPropietario) => negocioPropietario.negocio
  )
  negocioPropietario: NegocioPropietario;
}
