import { Column, Entity, Index } from "typeorm";

@Index("resguardo_detalle_pkey", ["id"], { unique: true })
@Entity("resguardo_detalle", { schema: "control_patrimonial" })
export class ResguardoDetalle {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "consecutivo" })
  consecutivo: number;

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
}
