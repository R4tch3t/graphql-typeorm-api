import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ResponsableUnit } from "./ResponsableUnit";
import { PaymentHead } from "./PaymentHead";
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Index("invoice_control_pkey", ["id"], { unique: true })
@Index("idx_4e1a923e472ccfe", ["responsableUnitId"], {})
@Entity("invoice_control", { schema: "finance" })
export class InvoiceControl {
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "responsable_unit_id" })
  responsableUnitId: number;

  @Column("integer", { name: "initial_invoice" })
  initialInvoice: number;

  @Column("date", { name: "initial_date" })
  initialDate: string;

  @Column("boolean", { name: "active" })
  active: boolean;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.invoiceControls
  )
  @JoinColumn([{ name: "responsable_unit_id", referencedColumnName: "id" }])
  responsableUnit: ResponsableUnit;

  @OneToMany(() => PaymentHead, (paymentHead) => paymentHead.invoice)
  paymentHeads: PaymentHead[];
}
