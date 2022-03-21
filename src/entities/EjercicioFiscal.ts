import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bien } from "./Bien";

@Index("ejercicio_fiscal_pkey", ["id"], { unique: true })
@Entity("ejercicio_fiscal", { schema: "control_patrimonial" })
export class EjercicioFiscal {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "ano" })
  ano: number;

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

  @OneToMany(() => Bien, (bien) => bien.ejercicioFiscal)
  biens: Bien[];
}
