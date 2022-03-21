import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bien } from "./Bien";

@Index("clasificacion_bienes_pkey", ["id"], { unique: true })
@Entity("clasificacion_bienes", { schema: "control_patrimonial" })
export class ClasificacionBienes {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "clave", length: 10 })
  clave: string;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Column("character varying", { name: "clave02", length: 10 })
  clave02: string;

  @Column("integer", { name: "cuentacontable" })
  cuentacontable: number;

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

  @OneToMany(() => Bien, (bien) => bien.clasificacionBien)
  biens: Bien[];
}
