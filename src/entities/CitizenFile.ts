import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Citizen } from "./Citizen";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Index("idx_dff1b649a63c3c2e", ["citizenId"], {})
@Index("idx_dff1b649c33f7837", ["documentId"], {})
@Index("citizen_file_pkey", ["id"], { unique: true })
@Entity("citizen_file", { schema: "citizens" })
export class CitizenFile {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "document_id" })
  documentId: number;

  @Column("integer", { name: "citizen_id" })
  citizenId: number;

  @Column("character varying", { name: "file_name", length: 255 })
  fileName: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("integer", { name: "user_created" })
  userCreated: number;

  @Column("integer", { name: "user_updated", nullable: true })
  userUpdated: number | null;

  @Column("text", { name: "observation", nullable: true })
  observation: string | null;

  @ManyToOne(() => Citizen, (citizen) => citizen.citizenFiles)
  @JoinColumn([{ name: "citizen_id", referencedColumnName: "id" }])
  citizen: Citizen;
}
