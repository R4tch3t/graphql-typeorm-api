import {
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

@Index("idx_9e6124878363f807", ["dependenciaTipoId"], {})
@Index("dependencia_pkey", ["id"], { unique: true })
@Index("idx_9e61248788823a92", ["localityId"], {})
@Index("idx_9e61248767707c89", ["localityId"], {})
@Entity("dependencia", { schema: "correspondencia" })
export class Dependencia {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "dependencia_tipo_id" })
  dependenciaTipoId: number;

  @Column("integer", { name: "locality_id" })
  localityId: number;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("character varying", { name: "siglas", length: 20 })
  siglas: string;

  @Column("character varying", { name: "nombre_titular", length: 255 })
  nombreTitular: string;

  @Column("character varying", { name: "telefono", length: 15 })
  telefono: string;

  @Column("character varying", { name: "correo_electronico", length: 50 })
  correoElectronico: string;

  @Column("character varying", { name: "calle", length: 100 })
  calle: string;

  @Column("character varying", {
    name: "numero_interior",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  numeroInterior: string | null;

  @Column("character varying", {
    name: "numero_exterior",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  numeroExterior: string | null;

  @Column("character varying", { name: "codigo_postal", length: 5 })
  codigoPostal: string;

  @Column("character varying", { name: "colonia", length: 100 })
  colonia: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.dependenciaEmisora
  )
  correspondenciaEntrantes: CorrespondenciaEntrante[];

  @ManyToOne(
    () => DependenciaTipos,
    (dependenciaTipos) => dependenciaTipos.dependencias
  )
  @JoinColumn([{ name: "dependencia_tipo_id", referencedColumnName: "id" }])
  dependenciaTipo: DependenciaTipos;

  @ManyToOne(() => Localidades, (localidades) => localidades.dependencias)
  @JoinColumn([{ name: "locality_id", referencedColumnName: "id" }])
  locality: Localidades;
}
