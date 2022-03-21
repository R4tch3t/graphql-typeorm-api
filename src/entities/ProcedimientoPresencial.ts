import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("procedimiento_presencial_pkey", ["id"], { unique: true })
@Index("idx_a04c90d01624bcd2", ["procedureId"], {})
@Entity("procedimiento_presencial", { schema: "procedures" })
export class ProcedimientoPresencial extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("text", { name: "descripcion" })
  descripcion: string;

  @Field({ nullable: true })
  @Column("text", { name: "nota" })
  nota: string;

  @Field({ nullable: true })
  @Column("integer", { name: "numero_fase" })
  numeroFase: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @ManyToOne(() => Procedure, (procedure) => procedure.procedimientoPresencials)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
