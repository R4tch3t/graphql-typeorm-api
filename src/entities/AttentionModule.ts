import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("attention_module_pkey", ["id"], { unique: true })
@Index("idx_8b5e49401624bcd2", ["procedureId"], {})
@Entity("attention_module", { schema: "procedures" })
export class AttentionModule extends BaseEntity {
  
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "name", length: 150 })
  name: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "person_in_charge", length: 255 })
  personInCharge: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "phones", length: 255 })
  phones: string;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("integer", { name: "user_updated", nullable: true })
  userUpdated: number | null;

  @Column("integer", { name: "user_created" })
  userCreated: number;

  @Column("character varying", {
    name: "latitude",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  latitude: string | null;

  @Column("character varying", {
    name: "longitude",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  longitude: string | null;

  @Column("character varying", {
    name: "cargo_responsable",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  cargoResponsable: string | null;

  @ManyToOne(() => Procedure, (procedure) => procedure.attentionModules)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
