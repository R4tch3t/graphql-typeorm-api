import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("costo_pkey", ["id"], { unique: true })
@Index("idx_6fadb9c61624bcd2", ["procedureId"], {})
@Entity("costo", { schema: "procedures" })
export class Costo extends BaseEntity {
  
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "monto" })
  monto: number;

  @Column("boolean", { name: "monto_fijo" })
  montoFijo: boolean;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "formula_calculo",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  formulaCalculo: string | null;

  @Column("integer", { name: "tipo_modena" })
  tipoModena: number;

  @Column("text", { name: "metodologia_calcula", nullable: true })
  metodologiaCalcula: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @Column("date", { name: "afecha_actualizacion_monto" })
  afechaActualizacionMonto: string;

  @ManyToOne(() => Procedure, (procedure) => procedure.costos)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
