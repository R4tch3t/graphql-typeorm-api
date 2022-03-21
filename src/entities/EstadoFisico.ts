import { Column, Entity, Index } from "typeorm";

@Index("estado_fisico_pkey", ["id"], { unique: true })
@Entity("estado_fisico", { schema: "control_patrimonial" })
export class EstadoFisico {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 50 })
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
