import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AccountPlans } from "./AccountPlans";
import { ObjectType } from 'type-graphql';

@ObjectType()
@Index("idx_c7cc33119b6b5fba", ["accountId"], {})
@Index("budget_classifier_pkey", ["id"], { unique: true })
@Index("idx_c7cc3311c22d8f50", ["receivablePayAccountId"], {})
@Entity("budget_classifier", { schema: "finance" })
export class BudgetClassifier {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("integer", { name: "receivable_pay_account_id" })
  receivablePayAccountId: number;

  @Column("character varying", { name: "classifier_key", length: 50 })
  classifierKey: string;

  @Column("character varying", { name: "description", length: 255 })
  description: string;

  @Column("integer", { name: "predecessor" })
  predecessor: number;

  @Column("integer", { name: "incoming_expense_classifier" })
  incomingExpenseClassifier: number;

  @Column("boolean", { name: "active" })
  active: boolean;

  @ManyToOne(
    () => AccountPlans,
    (accountPlans) => accountPlans.budgetClassifiers
  )
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: AccountPlans;

  @ManyToOne(
    () => AccountPlans,
    (accountPlans) => accountPlans.budgetClassifiers2
  )
  @JoinColumn([
    { name: "receivable_pay_account_id", referencedColumnName: "id" },
  ])
  receivablePayAccount: AccountPlans;
}
