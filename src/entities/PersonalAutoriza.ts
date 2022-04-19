import { Column, Entity, Index, OneToMany } from "typeorm";
import { Negocio } from "./Negocio";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("idx_2d7984a9952be730", ["empleadoId"], {})
@Index("personal_autoriza_pkey", ["id"], { unique: true })
@Entity("personal_autoriza", { schema: "licencias_comerciales" })
export class PersonalAutoriza {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "empleado_id" })
  empleadoId: number;

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

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @OneToMany(() => Negocio, (negocio) => negocio.personalAutoriza)
  negocios: Negocio[];
}
