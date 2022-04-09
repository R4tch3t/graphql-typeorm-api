import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { SolicitudCiudadana } from "./SolicitudCiudadana";

@ObjectType()
@Index("atencion_tipo_pkey", ["id"], { unique: true })
@Entity("atencion_tipo", { schema: "correspondencia" })
export class AtencionTipo extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "descripcion", length: 100 })
  descripcion: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field(() => [CorrespondenciaEntrante],{ nullable: true })
  @OneToMany(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.atencionTipo
  )
  correspondenciaEntrantes: CorrespondenciaEntrante[];
  
  @Field(() => [SolicitudCiudadana],{ nullable: true })
  @OneToMany(
    () => SolicitudCiudadana,
    (solicitudCiudadana) => solicitudCiudadana.atencionTipo
  )
  solicitudCiudadanas: SolicitudCiudadana[];
}
