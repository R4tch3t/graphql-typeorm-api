import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Localidades } from "./Localidades";
import { User } from "./User";
import { CitizenFile } from "./CitizenFile";
import { MeretrizControl } from "./MeretrizControl";
import { PaymentHead } from "./PaymentHead";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Index("uniq_83e6ec4be7927c74", ["email"], { unique: true })
@Index("citizen_pkey", ["id"], { unique: true })
@Index("idx_83e6ec4b88823a92", ["localityId"], {})
@Index("idx_83e6ec4b8d57a4bb", ["userId"], {})
@Entity("citizen", { schema: "citizens" })
export class Citizen extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "locality_id" })
  localityId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "gender", length: 1 })
  gender: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "nationality", length: 1 })
  nationality: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "age", length: 3 })
  age: string;

  @Field({ nullable: true })
  @Column("date", { name: "birth_day", nullable: true })
  birthDay: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "marital_status", length: 1 })
  maritalStatus: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "rfc",
    nullable: true,
    length: 13,
    default: () => "NULL::character varying",
  })
  rfc: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "curp",
    nullable: true,
    length: 18,
    default: () => "NULL::character varying",
  })
  curp: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "ine",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  ine: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "cell_phone",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  cellPhone: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "home_phone",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  homePhone: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "suburb", length: 100 })
  suburb: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "street", length: 100 })
  street: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "outdoor_number", length: 5 })
  outdoorNumber: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "interior_number",
    nullable: true,
    length: 5,
    default: () => "NULL::character varying",
  })
  interiorNumber: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "postal_code", length: 5 })
  postalCode: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "photography",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  photography: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "active" })
  active: boolean;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Field({ nullable: true })
  @Column("integer", { name: "user_created" })
  userCreated: number;

  @Field({ nullable: true })
  @Column("integer", { name: "user_updated", nullable: true })
  userUpdated: number | null;

  @Field({ nullable: true })
  @Column("integer", { name: "user__id" })
  userId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "name", length: 120 })
  name: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "first_last_name", length: 50 })
  firstLastName: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "second_last_name",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  secondLastName: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "email", length: 160 })
  email: string;

  //@Field(() => Localidades,{ nullable: true })
  @ManyToOne(() => Localidades, (localidades) => localidades.citizens)
  @JoinColumn([{ name: "locality_id", referencedColumnName: "id" }])
  locality: Localidades;

  //@Field({ nullable: true })
  @ManyToOne(() => User, (user) => user.citizens)
  @JoinColumn([{ name: "user__id", referencedColumnName: "id" }])
  user: User;

  //@Field({ nullable: true })
  @OneToMany(() => CitizenFile, (citizenFile) => citizenFile.citizen)
  citizenFiles: CitizenFile[];

  //@Field({ nullable: true })
  @OneToMany(
    () => MeretrizControl,
    (meretrizControl) => meretrizControl.citizen
  )
  meretrizControls: MeretrizControl[];
  
  //@Field({ nullable: true })
  @OneToMany(() => PaymentHead, (paymentHead) => paymentHead.citizen)
  paymentHeads: PaymentHead[];
}
