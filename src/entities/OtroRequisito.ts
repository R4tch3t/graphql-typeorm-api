import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("otro_requisito_pkey", ["id"], { unique: true })
@Index("idx_575781f61624bcd2", ["procedureId"], {})
@Entity("otro_requisito", { schema: "procedures" })
export class OtroRequisito extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Field({ nullable: true })
  @Column("text", { name: "descripcion" })
  descripcion: string;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "tipo_persona", nullable: true })
  tipoPersona: number | null;

  @ManyToOne(() => Procedure, (procedure) => procedure.otroRequisitos)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
