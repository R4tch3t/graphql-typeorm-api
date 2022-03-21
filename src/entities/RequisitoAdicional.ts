import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("requisito_adicional_pkey", ["id"], { unique: true })
@Index("idx_d1e7fbe91624bcd2", ["procedureId"], {})
@Entity("requisito_adicional", { schema: "procedures" })
export class RequisitoAdicional extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Field({ nullable: true })
  @Column("text", { name: "descripcion" })
  descripcion: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field({ nullable: true })
  @Column("integer", { name: "tipo_persona", nullable: true })
  tipoPersona: number | null;

  @ManyToOne(() => Procedure, (procedure) => procedure.requisitoAdicionals)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
