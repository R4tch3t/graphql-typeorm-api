import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Bien } from "./Bien";

@Index("uniq_207d9e8abd95b80f", ["bienId"], { unique: true })
@Index("bien_inmueble_pkey", ["id"], { unique: true })
@Entity("bien_inmueble", { schema: "control_patrimonial" })
export class BienInmueble {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "bien_id" })
  bienId: number;

  @Column("character varying", {
    name: "concepto",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  concepto: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  observaciones: string | null;

  @Column("numeric", { name: "valor_unitario", precision: 10, scale: 2 })
  valorUnitario: string;

  @Column("character varying", {
    name: "documento_propiedad",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  documentoPropiedad: string | null;

  @Column("character varying", {
    name: "localizacion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  localizacion: string | null;

  @Column("character varying", {
    name: "uso_actual",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  usoActual: string | null;

  @Column("numeric", { name: "medidas", precision: 10, scale: 2 })
  medidas: string;

  @Column("date", { name: "fecha_adquisicion", nullable: true })
  fechaAdquisicion: string | null;

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

  @OneToOne(() => Bien, (bien) => bien.bienInmueble)
  @JoinColumn([{ name: "bien_id", referencedColumnName: "id" }])
  bien: Bien;
}
