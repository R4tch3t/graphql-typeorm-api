import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Meretriz } from "./Meretriz";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("meretriz_revision_pkey", ["id"], { unique: true })
@Index("idx_264c3949d63af17f", ["meretrizId"], {})
@Entity("meretriz_revision", { schema: "salud_municipal" })
export class MeretrizRevision {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "meretriz_id" })
  meretrizId: number;

  @Column("date", { name: "revision_date" })
  revisionDate: string;

  @Column("integer", { name: "revision_type" })
  revisionType: number;

  @Column("text", { name: "notes" })
  notes: string;

  @Column("character varying", { name: "diagnosis", length: 100 })
  diagnosis: string;

  @ManyToOne(() => Meretriz, (meretriz) => meretriz.meretrizRevisions)
  @JoinColumn([{ name: "meretriz_id", referencedColumnName: "id" }])
  meretriz: Meretriz;
}
