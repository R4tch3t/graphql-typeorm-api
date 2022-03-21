import { Column, Entity, Index, OneToMany } from "typeorm";
import { ActividadEconomica } from "./ActividadEconomica";
import { GiroComercial } from "./GiroComercial";

@Index("tipo_giro_pkey", ["id"], { unique: true })
@Entity("tipo_giro", { schema: "licencias_comerciales" })
export class TipoGiro {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("text", { name: "descripcion" })
  descripcion: string;

  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("timestamp without time zone", { name: "fecha_actualizacion" })
  fechaActualizacion: Date;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico" })
  usuarioModifico: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(
    () => ActividadEconomica,
    (actividadEconomica) => actividadEconomica.tipoGiro
  )
  actividadEconomicas: ActividadEconomica[];

  @OneToMany(() => GiroComercial, (giroComercial) => giroComercial.tipoGiro)
  giroComercials: GiroComercial[];
}
