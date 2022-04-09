import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ActEconConNegocio } from "./ActEconConNegocio";
import { TipoGiro } from "./TipoGiro";
@ObjectType()
@Index("actividad_economica_pkey", ["id"], { unique: true })
@Index("idx_94cbbf8b96289aff", ["tipoGiroId"], {})
@Entity("actividad_economica", { schema: "licencias_comerciales" })
export class ActividadEconomica extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "tipo_giro_id" })
  tipoGiroId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 120 })
  nombre: string;

  @Field({ nullable: true })
  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Field({ nullable: true })
  @Column("timestamp without time zone", {
    name: "fecha_actualizacion",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  fechaActualizacion: Date | null;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "clave", length: 15 })
  clave: string;

  @Field({ nullable: true })
  @Column("numeric", { name: "costo", precision: 10, scale: 2 })
  costo: string;

  @Field({ nullable: true })
  @Column("numeric", { name: "costo_refrendo", precision: 10, scale: 2 })
  costoRefrendo: string;

  @Field({ nullable: true })
  @Column("numeric", { name: "costo_cambio_razon", precision: 10, scale: 2 })
  costoCambioRazon: string;

  @Field({ nullable: true })
  @Column("numeric", {
    name: "costo_cambio_domicilio",
    precision: 10,
    scale: 2,
  })
  costoCambioDomicilio: string;

  @Field({ nullable: true })
  @Column("numeric", { name: "costo_ampliacion_giro", precision: 10, scale: 2 })
  costoAmpliacionGiro: string;

  @Field({ nullable: true })
  @Column("numeric", { name: "costo_cambio_giro", precision: 10, scale: 2 })
  costoCambioGiro: string;

  @Field({ nullable: true })
  @Column("numeric", {
    name: "costo_cambio_propietario",
    precision: 10,
    scale: 2,
  })
  costoCambioPropietario: string;

  @Field(() => [ActEconConNegocio],{ nullable: true })
  @OneToMany(
    () => ActEconConNegocio,
    (actEconConNegocio) => actEconConNegocio.actividadEconomica
  )
  actEconConNegocios: ActEconConNegocio[];
  
  @Field(() => TipoGiro,{ nullable: true })
  @ManyToOne(() => TipoGiro, (tipoGiro) => tipoGiro.actividadEconomicas)
  @JoinColumn([{ name: "tipo_giro_id", referencedColumnName: "id" }])
  tipoGiro: TipoGiro;
}
