import { Column, Entity, Index, OneToMany } from "typeorm";
import { ParqueVehicular } from "./ParqueVehicular";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("tipo_auto_pkey", ["id"], { unique: true })
@Entity("tipo_auto", { schema: "control_patrimonial" })
export class TipoAuto {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

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

  @OneToMany(
    () => ParqueVehicular,
    (parqueVehicular) => parqueVehicular.tipoAuto
  )
  parqueVehiculars: ParqueVehicular[];
}
