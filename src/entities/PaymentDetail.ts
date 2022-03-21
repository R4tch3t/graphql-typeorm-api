import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ChargeConcepts } from "./ChargeConcepts";
import { PaymentHead } from "./PaymentHead";

@Index("idx_e928245061b2a8d8", ["chargeConceptId"], {})
@Index("payment_detail_pkey", ["id"], { unique: true })
@Index("idx_e92824504c3a3bb", ["paymentId"], {})
@Entity("payment_detail", { schema: "finance" })
export class PaymentDetail {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "payment_id" })
  paymentId: number;

  @Column("integer", { name: "charge_concept_id" })
  chargeConceptId: number;

  @Column("integer", { name: "quantity" })
  quantity: number;

  @Column("numeric", { name: "unit_price", precision: 10, scale: 2 })
  unitPrice: string;

  @Column("integer", { name: "iva" })
  iva: number;

  @Column("integer", { name: "discount", nullable: true })
  discount: number | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @ManyToOne(
    () => ChargeConcepts,
    (chargeConcepts) => chargeConcepts.paymentDetails
  )
  @JoinColumn([{ name: "charge_concept_id", referencedColumnName: "id" }])
  chargeConcept: ChargeConcepts;

  @ManyToOne(() => PaymentHead, (paymentHead) => paymentHead.paymentDetails)
  @JoinColumn([{ name: "payment_id", referencedColumnName: "id" }])
  payment: PaymentHead;
}
