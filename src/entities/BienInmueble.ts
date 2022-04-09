import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Bien } from "./Bien";

@ObjectType()
@Index("uniq_207d9e8abd95b80f", ["bienId"], { unique: true })
@Index("bien_inmueble_pkey", ["id"], { unique: true })
@Entity("bien_inmueble", { schema: "control_patrimonial" })
export class BienInmueble extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "bien_id" })
  bienId: number;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "concepto",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  concepto: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  observaciones: string | null;

  @Field({ nullable: true })
  @Column("numeric", { name: "valor_unitario", precision: 10, scale: 2 })
  valorUnitario: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "documento_propiedad",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  documentoPropiedad: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "localizacion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  localizacion: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "uso_actual",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  usoActual: string | null;

  @Field({ nullable: true })
  @Column("numeric", { name: "medidas", precision: 10, scale: 2 })
  medidas: string;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_adquisicion", nullable: true })
  fechaAdquisicion: string | null;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field(() => Bien,{ nullable: true })
  @OneToOne(() => Bien, (bien) => bien.bienInmueble)
  @JoinColumn([{ name: "bien_id", referencedColumnName: "id" }])
  bien: Bien;
}
