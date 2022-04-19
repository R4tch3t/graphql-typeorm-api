import { Column, Entity, Index } from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("pago_conceptos_pkey", ["id"], { unique: true })
@Entity("pago_conceptos", { schema: "salud_municipal" })
export class PagoConceptos {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("integer", { name: "amount" })
  amount: number;

  @Column("character varying", { name: "description", length: 255 })
  description: string;

  @Column("boolean", { name: "active" })
  active: boolean;
}
