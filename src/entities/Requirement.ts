import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("idx_52866ca4c33f7837", ["documentId"], {})
@Index("requirement_pkey", ["id"], { unique: true })
@Index("idx_52866ca41624bcd2", ["procedureId"], {})
@Entity("requirement", { schema: "procedures" })
export class Requirement extends BaseEntity {
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "document_id" })
  documentId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "description", length: 255 })
  description: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "original" })
  original: boolean;

  @Field({ nullable: true })
  @Column("smallint", { name: "number_copies" })
  numberCopies: number;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "sample",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  sample: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "active" })
  active: boolean;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  updatedAt: Date | null;

  @Column("integer", { name: "user_created" })
  userCreated: number;

  @Column("integer", { name: "user_updated", nullable: true })
  userUpdated: number | null;

  @Column("integer", { name: "tipo_persona", nullable: true })
  tipoPersona: number | null;

  @ManyToOne(() => Procedure, (procedure) => procedure.requirements)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
