import { Column, Entity, Index, OneToMany } from "typeorm";
import { PaymentHead } from "./PaymentHead";

@Index("uniq_c89512fd8c03f15c", ["employeeId"], { unique: true })
@Index("cashier_pkey", ["id"], { unique: true })
@Entity("cashier", { schema: "finance" })
export class Cashier {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "initial_balance" })
  initialBalance: number;

  @Column("integer", { name: "employee_id", nullable: true })
  employeeId: number | null;

  @OneToMany(() => PaymentHead, (paymentHead) => paymentHead.cashier)
  paymentHeads: PaymentHead[];
}
