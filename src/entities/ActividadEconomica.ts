import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ActEconConNegocio } from "./ActEconConNegocio";
import { TipoGiro } from "./TipoGiro";

@Index("actividad_economica_pkey", ["id"], { unique: true })
@Index("idx_94cbbf8b96289aff", ["tipoGiroId"], {})
@Entity("actividad_economica", { schema: "licencias_comerciales" })
export class ActividadEconomica {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "tipo_giro_id" })
  tipoGiroId: number;

  @Column("character varying", { name: "nombre", length: 120 })
  nombre: string;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("boolean", { name: "activo" })
  activo: boolean;

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

  @Column("character varying", { name: "clave", length: 15 })
  clave: string;

  @Column("numeric", { name: "costo", precision: 10, scale: 2 })
  costo: string;

  @Column("numeric", { name: "costo_refrendo", precision: 10, scale: 2 })
  costoRefrendo: string;

  @Column("numeric", { name: "costo_cambio_razon", precision: 10, scale: 2 })
  costoCambioRazon: string;

  @Column("numeric", {
    name: "costo_cambio_domicilio",
    precision: 10,
    scale: 2,
  })
  costoCambioDomicilio: string;

  @Column("numeric", { name: "costo_ampliacion_giro", precision: 10, scale: 2 })
  costoAmpliacionGiro: string;

  @Column("numeric", { name: "costo_cambio_giro", precision: 10, scale: 2 })
  costoCambioGiro: string;

  @Column("numeric", {
    name: "costo_cambio_propietario",
    precision: 10,
    scale: 2,
  })
  costoCambioPropietario: string;

  @OneToMany(
    () => ActEconConNegocio,
    (actEconConNegocio) => actEconConNegocio.actividadEconomica
  )
  actEconConNegocios: ActEconConNegocio[];

  @ManyToOne(() => TipoGiro, (tipoGiro) => tipoGiro.actividadEconomicas)
  @JoinColumn([{ name: "tipo_giro_id", referencedColumnName: "id" }])
  tipoGiro: TipoGiro;
}
