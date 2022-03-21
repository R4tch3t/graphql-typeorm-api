import { Column, Entity, Index } from "typeorm";

@Index("doctrine_migration_versions_pkey", ["version"], { unique: true })
@Entity("doctrine_migration_versions", { schema: "public" })
export class DoctrineMigrationVersions {
  @Column("character varying", { primary: true, name: "version", length: 191 })
  version: string;

  @Column("timestamp without time zone", {
    name: "executed_at",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  executedAt: Date | null;

  @Column("integer", { name: "execution_time", nullable: true })
  executionTime: number | null;
}
