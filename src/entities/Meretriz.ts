import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Localidades } from "./Localidades";
import { MeretrizJob } from "./MeretrizJob";
import { MeretrizRevision } from "./MeretrizRevision";

@Index("meretriz_pkey", ["id"], { unique: true })
@Index("idx_684b064f88823a92", ["localityId"], {})
@Entity("meretriz", { schema: "salud_municipal" })
export class Meretriz {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "locality_id" })
  localityId: number;

  @Column("character varying", { name: "sanitary_register_number", length: 20 })
  sanitaryRegisterNumber: string;

  @Column("character varying", { name: "first_name", length: 100 })
  firstName: string;

  @Column("character varying", { name: "first_last_name", length: 100 })
  firstLastName: string;

  @Column("character varying", { name: "second_last_name", length: 100 })
  secondLastName: string;

  @Column("character varying", { name: "mobile_phone_number", length: 15 })
  mobilePhoneNumber: string;

  @Column("character varying", { name: "email", length: 100 })
  email: string;

  @Column("character varying", { name: "curp", length: 18 })
  curp: string;

  @Column("character varying", { name: "rfc", length: 15 })
  rfc: string;

  @Column("character varying", { name: "street", length: 255 })
  street: string;

  @Column("character varying", { name: "inside_number", length: 100 })
  insideNumber: string;

  @Column("character varying", { name: "outside_number", length: 100 })
  outsideNumber: string;

  @Column("character varying", { name: "neighborhood", length: 100 })
  neighborhood: string;

  @Column("character varying", { name: "postal_code", length: 5 })
  postalCode: string;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @Column("character varying", {
    name: "photography",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  photography: string | null;

  @ManyToOne(() => Localidades, (localidades) => localidades.meretrizs)
  @JoinColumn([{ name: "locality_id", referencedColumnName: "id" }])
  locality: Localidades;

  @OneToMany(() => MeretrizJob, (meretrizJob) => meretrizJob.meretriz)
  meretrizJobs: MeretrizJob[];

  @OneToMany(
    () => MeretrizRevision,
    (meretrizRevision) => meretrizRevision.meretriz
  )
  meretrizRevisions: MeretrizRevision[];
}
