import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bien } from "./Bien";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("tipo_bien_pkey", ["id"], { unique: true })
@Entity("tipo_bien", { schema: "control_patrimonial" })
export class TipoBien {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("text", { name: "descripcion" })
  descripcion: string;

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

  @OneToMany(() => Bien, (bien) => bien.tipoBien)
  biens: Bien[];
}
