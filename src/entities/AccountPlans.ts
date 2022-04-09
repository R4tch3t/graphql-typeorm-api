import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { BudgetClassifier } from "./BudgetClassifier";
import { MatrizIngreso } from "./MatrizIngreso";

@ObjectType()
@Index("account_plans_pkey", ["id"], { unique: true })
@Entity("account_plans", { schema: "finance" })
export class AccountPlans extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "accounting_account_key", length: 100 })
  accountingAccountKey: string;

  @Field({ nullable: true })
  @Column("text", { name: "description" })
  description: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field({ nullable: true })
  @Column("character varying", { name: "predecessor", length: 100 })
  predecessor: string;

  @Field(() => [BudgetClassifier],{ nullable: true })
  @OneToMany(
    () => BudgetClassifier,
    (budgetClassifier) => budgetClassifier.account
  )
  budgetClassifiers: BudgetClassifier[];
  
  @Field(() => [BudgetClassifier],{ nullable: true })
  @OneToMany(
    () => BudgetClassifier,
    (budgetClassifier) => budgetClassifier.receivablePayAccount
  )
  budgetClassifiers2: BudgetClassifier[];
  
  @Field(() => [MatrizIngreso],{ nullable: true })
  @OneToMany(
    () => MatrizIngreso,
    (matrizIngreso) => matrizIngreso.planCuentaAbono
  )
  matrizIngresos: MatrizIngreso[];
  
  @Field(() => [MatrizIngreso],{ nullable: true })
  @OneToMany(
    () => MatrizIngreso,
    (matrizIngreso) => matrizIngreso.planCuentaCargo
  )
  matrizIngresos2: MatrizIngreso[];
}
