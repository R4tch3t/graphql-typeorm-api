import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ChargeConcepts } from "./ChargeConcepts";

@Index("idx_5190d8d361b2a8d8", ["chargeConceptId"], {})
@Index("additional_charge_pkey", ["id"], { unique: true })
@Entity("additional_charge", { schema: "finance" })
export class AdditionalCharge {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "charge_concept_id" })
  chargeConceptId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("smallint", { name: "percentage" })
  percentage: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @ManyToOne(
    () => ChargeConcepts,
    (chargeConcepts) => chargeConcepts.additionalCharges
  )
  @JoinColumn([{ name: "charge_concept_id", referencedColumnName: "id" }])
  chargeConcept: ChargeConcepts;
}
