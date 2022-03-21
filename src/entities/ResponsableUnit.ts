import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { ChargeConcepts } from "./ChargeConcepts";
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { InvoiceControl } from "./InvoiceControl";
import { PaymentHead } from "./PaymentHead";
import { Procedure } from "./Procedure";
import { Seguimiento } from "./Seguimiento";
import { SolicitudCiudadana } from "./SolicitudCiudadana";

@ObjectType()
@Index("responsable_unit_pkey", ["id"], { unique: true })
@Entity("responsable_unit", { schema: "finance" })
export class ResponsableUnit extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "ures_key", length: 20 })
  uresKey: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "description", length: 255 })
  description: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "predecessor",
    nullable: true,
    length: 20,
  })
  predecessor: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field({ nullable: true })
  @Column("integer", { name: "accept_entry" })
  acceptEntry: number;

  @OneToMany(
    () => ChargeConcepts,
    (chargeConcepts) => chargeConcepts.responsableUnit
  )
  chargeConcepts: ChargeConcepts[];

  @OneToMany(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.uresDestino
  )
  correspondenciaEntrantes: CorrespondenciaEntrante[];

  @OneToMany(
    () => InvoiceControl,
    (invoiceControl) => invoiceControl.responsableUnit
  )
  invoiceControls: InvoiceControl[];

  @OneToMany(() => PaymentHead, (paymentHead) => paymentHead.responsableUnit)
  paymentHeads: PaymentHead[];

  @OneToMany(() => Procedure, (procedure) => procedure.responsableUnit)
  procedures: Procedure[];

  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.areaPadre)
  seguimientos: Seguimiento[];

  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.areaTurnada)
  seguimientos2: Seguimiento[];

  @OneToMany(
    () => SolicitudCiudadana,
    (solicitudCiudadana) => solicitudCiudadana.ures
  )
  solicitudCiudadanas: SolicitudCiudadana[];
}
