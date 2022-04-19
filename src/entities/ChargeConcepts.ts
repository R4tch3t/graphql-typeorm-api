import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AdditionalCharge } from "./AdditionalCharge";
import { MatrizIngreso } from "./MatrizIngreso";
import { ResponsableUnit } from "./ResponsableUnit";
import { PaymentDetail } from "./PaymentDetail";
import { Field, ObjectType } from "type-graphql";
@ObjectType()
@Index("idx_cd89dbb7775e9a09", ["budgetClassifierId"], {})
@Index("charge_concepts_pkey", ["id"], { unique: true })
@Index("idx_cd89dbb7e472ccfe", ["responsableUnitId"], {})
@Entity("charge_concepts", { schema: "finance" })
export class ChargeConcepts extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "responsable_unit_id" })
  responsableUnitId: number;

  @Column("integer", { name: "budget_classifier_id" })
  budgetClassifierId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("numeric", { name: "cost", precision: 10, scale: 2 })
  cost: string;

  @Column("character varying", {
    name: "observations",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  observations: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @Column("character varying", { name: "year", length: 4 })
  year: string;

  @Column("character varying", { name: "clave", length: 50 })
  clave: string;

  @Column("boolean", { name: "apply_iva" })
  applyIva: boolean;

  @Column("boolean", { name: "apply_uma", nullable: true })
  applyUma: boolean | null;

  @Column("boolean", { name: "adicionales", nullable: true })
  adicionales: boolean | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 133,
    default: () => "NULL::character varying",
  })
  description: string | null;

  @OneToMany(
    () => AdditionalCharge,
    (additionalCharge) => additionalCharge.chargeConcept
  )
  additionalCharges: AdditionalCharge[];

  @ManyToOne(
    () => MatrizIngreso,
    (matrizIngreso) => matrizIngreso.chargeConcepts
  )
  @JoinColumn([{ name: "budget_classifier_id", referencedColumnName: "id" }])
  budgetClassifier: MatrizIngreso;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.chargeConcepts
  )
  @JoinColumn([{ name: "responsable_unit_id", referencedColumnName: "id" }])
  responsableUnit: ResponsableUnit;

  @OneToMany(
    () => PaymentDetail,
    (paymentDetail) => paymentDetail.chargeConcept
  )
  paymentDetails: PaymentDetail[];
}
