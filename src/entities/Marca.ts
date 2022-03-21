import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Bien } from "./Bien";
import { ParqueVehicular } from "./ParqueVehicular";

@Index("idx_dc5f05adbd95b80f", ["bienId"], {})
@Index("marca_pkey", ["id"], { unique: true })
@Entity("marca", { schema: "control_patrimonial" })
export class Marca {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "bien_id" })
  bienId: number;

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

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @ManyToOne(() => Bien, (bien) => bien.marcas)
  @JoinColumn([{ name: "bien_id", referencedColumnName: "id" }])
  bien: Bien;

  @OneToOne(() => ParqueVehicular, (parqueVehicular) => parqueVehicular.marca)
  parqueVehicular: ParqueVehicular;
}
