import { Column, Entity, Index } from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("fiscal_excercise_pkey", ["id"], { unique: true })
@Entity("fiscal_excercise", { schema: "finance" })
export class FiscalExcercise {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("smallint", { name: "year" })
  year: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("smallint", { name: "iva" })
  iva: number;

  @Column("numeric", { name: "uma", precision: 10, scale: 2 })
  uma: string;

  @Column("timestamp without time zone", { name: "initial_date" })
  initialDate: Date;

  @Column("date", { name: "final_date" })
  finalDate: string;

  @Column("boolean", { name: "active" })
  active: boolean;
}
