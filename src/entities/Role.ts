import { Column, Entity, Index } from "typeorm";

@Index("role_pkey", ["id"], { unique: true })
@Index("uniq_57698a6a5e237e06", ["name"], { unique: true })
@Entity("role", { schema: "public" })
export class Role {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 60 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;
}
