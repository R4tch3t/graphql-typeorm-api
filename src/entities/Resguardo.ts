import { Column, Entity, Index } from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("idx_7d0e06c32980d438", ["empleadoContratoId"], {})
@Index("resguardo_pkey", ["id"], { unique: true })
@Entity("resguardo", { schema: "control_patrimonial" })
export class Resguardo {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "empleado_contrato_id" })
  empleadoContratoId: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("date", { name: "fecha" })
  fecha: string;
}
