import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { Bitacora } from "./Bitacora";
import { Citizen } from "./Citizen";
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { PaymentHead } from "./PaymentHead";
import { Seguimiento } from "./Seguimiento";
import { SolicitudCiudadana } from "./SolicitudCiudadana";
import { TramitePregunta } from "./TramitePregunta";
import { Group } from "./Group";

@Index("uniq_8d93d649e7927c74", ["email"], { unique: true })
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "email", length: 180 })
  email: string;

  @Column("json", { name: "roles" })
  roles: object;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Column("character varying", { name: "name", length: 60 })
  name: string;

  @Column("character varying", { name: "last_name", length: 120 })
  lastName: string;

  @Column("character varying", {
    name: "second_last_name",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  secondLastName: string | null;

  @Column("character varying", {
    name: "photography",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  photography: string | null;

  @OneToMany(() => Bitacora, (bitacora) => bitacora.usuarioRealizoAccion)
  bitacoras: Bitacora[];

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
