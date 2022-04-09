import { Any, BaseEntity, Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { Bitacora } from "./Bitacora";
import { Citizen } from "./Citizen";
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { PaymentHead } from "./PaymentHead";
import { Seguimiento } from "./Seguimiento";
import { SolicitudCiudadana } from "./SolicitudCiudadana";
import { TramitePregunta } from "./TramitePregunta";
import { Group } from "./Group";
import { Field, ObjectType } from "type-graphql";

@ObjectType() //necesario
@Index("uniq_8d93d649e7927c74", ["email"], { unique: true })
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
//                agregar a la clase
export class User extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "email", length: 180 })
  email: string;

  @Field(()=>[String],{ nullable: true }) 
  @Column("json", { name: "roles" })
  roles: object;

  @Field({ nullable: true })
  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "name", length: 60 })
  name: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "last_name", length: 120 })
  lastName: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "second_last_name",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  secondLastName: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "photography",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  photography: string | null;
  
  // Uno a muchos: ()=>[Bitacora]; uno a uno sería ()=>Bitacora 
  @Field(()=>[Bitacora],{nullable: true})
  @OneToMany(() => Bitacora, (bitacora) => bitacora.usuarioRealizoAccion)
  bitacoras: Bitacora[];

  @Field(()=>[Citizen],{nullable: true})
  @OneToMany(() => Citizen, (citizen) => citizen.user)
  citizens: Citizen[];

  @OneToMany(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.usuario
  )
  correspondenciaEntrantes: CorrespondenciaEntrante[];
  
  @OneToMany(() => PaymentHead, (paymentHead) => paymentHead.adminUser)
  paymentHeads: PaymentHead[];
  
  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.usuarioCreo)
  seguimientos: Seguimiento[];
  
  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.usuarioModifico)
  seguimientos2: Seguimiento[];
  
  @OneToMany(
    () => SolicitudCiudadana,
    (solicitudCiudadana) => solicitudCiudadana.usuario
  )
  solicitudCiudadanas: SolicitudCiudadana[];
  
  @OneToMany(
    () => TramitePregunta,
    (tramitePregunta) => tramitePregunta.usuarioCreo
  )
  tramitePreguntas: TramitePregunta[];

  @OneToMany(
    () => TramitePregunta,
    (tramitePregunta) => tramitePregunta.usuarioModifico
  )
  tramitePreguntas2: TramitePregunta[];
  
  @ManyToMany(() => Group, (group) => group.users)
  groups: Group[];
}
