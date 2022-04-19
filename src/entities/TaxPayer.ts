import { Column, Entity, Index } from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("tax_payer_pkey", ["id"], { unique: true })
@Entity("tax_payer", { schema: "finance" })
export class TaxPayer {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("boolean", { name: "active" })
  active: boolean;
}
