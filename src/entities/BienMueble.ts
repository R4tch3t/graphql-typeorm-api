import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Bien } from "./Bien";

@Index("uniq_d6e9752fbd95b80f", ["bienId"], { unique: true })
@Index("bien_mueble_pkey", ["id"], { unique: true })
@Entity("bien_mueble", { schema: "control_patrimonial" })
export class BienMueble {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "bien_id" })
  bienId: number;

  @Column("character varying", {
    name: "color",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  color: string | null;

  @Column("character varying", {
    name: "num_serie",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  numSerie: string | null;

  @Column("numeric", { name: "precio", precision: 10, scale: 2 })
  precio: string;

  @Column("character varying", {
    name: "hd",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  hd: string | null;

  @Column("character varying", {
    name: "mem_ram",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  memRam: string | null;

  @Column("character varying", {
    name: "procesador",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  procesador: string | null;

  @Column("character varying", {
    name: "so",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  so: string | null;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToOne(() => Bien, (bien) => bien.bienMueble)
  @JoinColumn([{ name: "bien_id", referencedColumnName: "id" }])
  bien: Bien;
}
