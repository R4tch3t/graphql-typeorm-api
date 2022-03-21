import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("downloadable_format_pkey", ["id"], { unique: true })
@Index("idx_2a16197e1624bcd2", ["procedureId"], {})
@Entity("downloadable_format", { schema: "procedures" })
export class DownloadableFormat extends BaseEntity {
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "name", length: 120 })
  name: string;

  @Field({ nullable: true })
  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "document", length: 255 })
  document: string;

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

  @Column("text", { name: "instrucciones_llenado", nullable: true })
  instruccionesLlenado: string | null;

  @ManyToOne(() => Procedure, (procedure) => procedure.downloadableFormats)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
