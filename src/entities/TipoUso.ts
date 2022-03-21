import { Column, Entity, Index } from "typeorm";

@Index("tipo_uso_pkey", ["id"], { unique: true })
@Entity("tipo_uso", { schema: "control_patrimonial" })
export class TipoUso {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  descripcion: string | null;

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
