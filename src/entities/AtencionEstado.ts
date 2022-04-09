import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { Seguimiento } from "./Seguimiento";
import { SolicitudCiudadana } from "./SolicitudCiudadana";

@ObjectType()
@Index("atencion_estado_pkey", ["id"], { unique: true })
@Entity("atencion_estado", { schema: "correspondencia" })
export class AtencionEstado extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field(() => [Seguimiento],{ nullable: true })
  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.estatus)
  seguimientos: Seguimiento[];

  @Field(() => [SolicitudCiudadana],{ nullable: true })
  @OneToMany(
    () => SolicitudCiudadana,
    (solicitudCiudadana) => solicitudCiudadana.estadoAtencion
  )
  solicitudCiudadanas: SolicitudCiudadana[];
}
