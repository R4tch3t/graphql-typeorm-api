import { Column, Entity, Index, OneToMany } from "typeorm";
import { BudgetClassifier } from "./BudgetClassifier";
import { MatrizIngreso } from "./MatrizIngreso";

@Index("account_plans_pkey", ["id"], { unique: true })
@Entity("account_plans", { schema: "finance" })
export class AccountPlans {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "accounting_account_key", length: 100 })
  accountingAccountKey: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("character varying", { name: "predecessor", length: 100 })
  predecessor: string;

  @OneToMany(
    () => BudgetClassifier,
    (budgetClassifier) => budgetClassifier.account
  )
  budgetClassifiers: BudgetClassifier[];

  @OneToMany(
    () => BudgetClassifier,
    (budgetClassifier) => budgetClassifier.receivablePayAccount
  )
  budgetClassifiers2: BudgetClassifier[];

  @OneToMany(
    () => MatrizIngreso,
    (matrizIngreso) => matrizIngreso.planCuentaAbono
  )
  matrizIngresos: MatrizIngreso[];

  @OneToMany(
    () => MatrizIngreso,
    (matrizIngreso) => matrizIngreso.planCuentaCargo
  )
  matrizIngresos2: MatrizIngreso[];
}
