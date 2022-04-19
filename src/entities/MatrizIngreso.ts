import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ChargeConcepts } from "./ChargeConcepts";
import { AccountPlans } from "./AccountPlans";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("matriz_ingreso_pkey", ["id"], { unique: true })
@Index("idx_cf6368782031a2d5", ["planCuentaAbonoId"], {})
@Index("idx_cf636878e1a4cc01", ["planCuentaCargoId"], {})
@Entity("matriz_ingreso", { schema: "finance" })
export class MatrizIngreso {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "plan_cuenta_abono_id", nullable: true })
  planCuentaAbonoId: number | null;

  @Column("integer", { name: "plan_cuenta_cargo_id", nullable: true })
  planCuentaCargoId: number | null;

  @Column("character varying", { name: "classifier_key", length: 255 })
  classifierKey: string;

  @Column("character varying", { name: "predecesor", length: 255 })
  predecesor: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("character varying", {
    name: "account_type",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  accountType: string | null;

  @Column("character varying", {
    name: "acreedora",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  acreedora: string | null;

  @Column("character varying", {
    name: "cuenta_abono",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  cuentaAbono: string | null;

  @Column("character varying", {
    name: "cuenta_cargo",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  cuentaCargo: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @OneToMany(
    () => ChargeConcepts,
    (chargeConcepts) => chargeConcepts.budgetClassifier
  )
  chargeConcepts: ChargeConcepts[];

  @ManyToOne(() => AccountPlans, (accountPlans) => accountPlans.matrizIngresos)
  @JoinColumn([{ name: "plan_cuenta_abono_id", referencedColumnName: "id" }])
  planCuentaAbono: AccountPlans;

  @ManyToOne(() => AccountPlans, (accountPlans) => accountPlans.matrizIngresos2)
  @JoinColumn([{ name: "plan_cuenta_cargo_id", referencedColumnName: "id" }])
  planCuentaCargo: AccountPlans;
}
