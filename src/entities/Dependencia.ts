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
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { DependenciaTipos } from "./DependenciaTipos";
import { Localidades } from "./Localidades";

@ObjectType()
@Index("idx_9e6124878363f807", ["dependenciaTipoId"], {})
@Index("dependencia_pkey", ["id"], { unique: true })
@Index("idx_9e61248788823a92", ["localityId"], {})
@Index("idx_9e61248767707c89", ["localityId"], {})
@Entity("dependencia", { schema: "correspondencia" })
export class Dependencia extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "dependencia_tipo_id" })
  dependenciaTipoId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "locality_id" })
  localityId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "siglas", length: 20 })
  siglas: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre_titular", length: 255 })
  nombreTitular: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "telefono", length: 15 })
  telefono: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "correo_electronico", length: 50 })
  correoElectronico: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "calle", length: 100 })
  calle: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "numero_interior",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  numeroInterior: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "numero_exterior",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  numeroExterior: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "codigo_postal", length: 5 })
  codigoPostal: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "colonia", length: 100 })
  colonia: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field(() => [CorrespondenciaEntrante],{ nullable: true })
  @OneToMany(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.dependenciaEmisora
  )
  correspondenciaEntrantes: CorrespondenciaEntrante[];
  
  @Field(() => DependenciaTipos,{ nullable: true })
  @ManyToOne(
    () => DependenciaTipos,
    (dependenciaTipos) => dependenciaTipos.dependencias
  )
  @JoinColumn([{ name: "dependencia_tipo_id", referencedColumnName: "id" }])
  dependenciaTipo: DependenciaTipos;
  
  @Field(() => Localidades,{ nullable: true })
  @ManyToOne(() => Localidades, (localidades) => localidades.dependencias)
  @JoinColumn([{ name: "locality_id", referencedColumnName: "id" }])
  locality: Localidades;
}
