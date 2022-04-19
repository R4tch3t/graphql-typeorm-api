import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PaymentDetail } from "./PaymentDetail";
import { User } from "./User";
import { Cashier } from "./Cashier";
import { Citizen } from "./Citizen";
import { InvoiceControl } from "./InvoiceControl";
import { ResponsableUnit } from "./ResponsableUnit";
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Index("idx_ed5be2006352511c", ["adminUserId"], {})
@Index("idx_ed5be2002edb0489", ["cashierId"], {})
@Index("idx_ed5be200a63c3c2e", ["citizenId"], {})
@Index("payment_head_pkey", ["id"], { unique: true })
@Index("idx_ed5be2002989f1fd", ["invoiceId"], {})
@Index("idx_ed5be200e472ccfe", ["responsableUnitId"], {})
@Entity("payment_head", { schema: "finance" })
export class PaymentHead {
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "invoice_id", nullable: true })
  invoiceId: number | null;

  @Column("integer", { name: "cashier_id" })
  cashierId: number;

  @Column("integer", { name: "responsable_unit_id" })
  responsableUnitId: number;

  @Column("integer", { name: "admin_user_id", nullable: true })
  adminUserId: number | null;

  @Column("date", { name: "payment_date" })
  paymentDate: string;

  @Column("character varying", {
    name: "observations",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  observations: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @Column("integer", { name: "citizen_id" })
  citizenId: number;

  @OneToMany(() => PaymentDetail, (paymentDetail) => paymentDetail.payment)
  paymentDetails: PaymentDetail[];

  @ManyToOne(() => User, (user) => user.paymentHeads)
  @JoinColumn([{ name: "admin_user_id", referencedColumnName: "id" }])
  adminUser: User;

  @ManyToOne(() => Cashier, (cashier) => cashier.paymentHeads)
  @JoinColumn([{ name: "cashier_id", referencedColumnName: "id" }])
  cashier: Cashier;

  @ManyToOne(() => Citizen, (citizen) => citizen.paymentHeads)
  @JoinColumn([{ name: "citizen_id", referencedColumnName: "id" }])
  citizen: Citizen;

  @ManyToOne(
    () => InvoiceControl,
    (invoiceControl) => invoiceControl.paymentHeads
  )
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: InvoiceControl;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.paymentHeads
  )
  @JoinColumn([{ name: "responsable_unit_id", referencedColumnName: "id" }])
  responsableUnit: ResponsableUnit;
}
