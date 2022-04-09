import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ActividadEconomica } from "./ActividadEconomica";
import { Negocio } from "./Negocio";

@ObjectType()
@Index("idx_96d865f6cadd19e", ["actividadEconomicaId"], {})
@Index("act_econ_con_negocio_pkey", ["id"], { unique: true })
@Index("idx_96d865f7d879e4f", ["negocioId"], {})
@Entity("act_econ_con_negocio", { schema: "licencias_comerciales" })
export class ActEconConNegocio extends BaseEntity {
  
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "actividad_economica_id" })
  actividadEconomicaId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "negocio_id" })
  negocioId: number;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Field({ nullable: true })
  @Column("timestamp without time zone", {
    name: "fecha_actualizacion",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  fechaActualizacion: Date | null;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field(() => ActividadEconomica, { nullable: true })
  @ManyToOne(
    () => ActividadEconomica,
    (actividadEconomica) => actividadEconomica.actEconConNegocios
  ) 
  @JoinColumn([{ name: "actividad_economica_id", referencedColumnName: "id" }])
  actividadEconomica: ActividadEconomica;
  
  @Field(() => Negocio, { nullable: true })
  @ManyToOne(() => Negocio, (negocio) => negocio.actEconConNegocios)
  @JoinColumn([{ name: "negocio_id", referencedColumnName: "id" }])
  negocio: Negocio;
}
