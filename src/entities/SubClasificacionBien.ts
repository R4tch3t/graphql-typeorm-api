import { Column, Entity, Index } from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("sub_clasificacion_bien_pkey", ["id"], { unique: true })
@Entity("sub_clasificacion_bien", { schema: "control_patrimonial" })
export class SubClasificacionBien {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;
}
