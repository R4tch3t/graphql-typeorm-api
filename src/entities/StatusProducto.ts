import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bien } from "./Bien";

@Index("status_producto_pkey", ["id"], { unique: true })
@Entity("status_producto", { schema: "control_patrimonial" })
export class StatusProducto {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("text", { name: "descripcion", nullable: true })
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

  @OneToMany(() => Bien, (bien) => bien.statusProducto)
  biens: Bien[];
}
