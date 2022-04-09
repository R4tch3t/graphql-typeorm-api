import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ChargeConcepts } from "./ChargeConcepts";

@ObjectType()
@Index("idx_5190d8d361b2a8d8", ["chargeConceptId"], {})
@Index("additional_charge_pkey", ["id"], { unique: true })
@Entity("additional_charge", { schema: "finance" })
export class AdditionalCharge extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "charge_concept_id" })
  chargeConceptId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "percentage" })
  percentage: number;

  @Field({ nullable: true })
  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "active" })
  active: boolean;

  @Field(() => ChargeConcepts,{ nullable: true })
  @ManyToOne(
    () => ChargeConcepts,
    (chargeConcepts) => chargeConcepts.additionalCharges
  )
  @JoinColumn([{ name: "charge_concept_id", referencedColumnName: "id" }])
  chargeConcept: ChargeConcepts;
}
