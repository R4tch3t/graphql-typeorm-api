import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bien } from "./Bien";

@Index("cuenta_publica_pkey", ["id"], { unique: true })
@Entity("cuenta_publica", { schema: "control_patrimonial" })
export class CuentaPublica {
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

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @OneToMany(() => Bien, (bien) => bien.cuentaPublica)
  biens: Bien[];
}
