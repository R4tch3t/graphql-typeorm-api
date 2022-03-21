import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bien } from "./Bien";

@Index("fondo_pkey", ["id"], { unique: true })
@Entity("fondo", { schema: "control_patrimonial" })
export class Fondo {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 150,
    default: () => "NULL::character varying",
  })
  descripcion: string | null;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @OneToMany(() => Bien, (bien) => bien.fondo)
  biens: Bien[];
}
