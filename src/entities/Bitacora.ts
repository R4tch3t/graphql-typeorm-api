import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@ObjectType()
@Index("bitacora_pkey", ["id"], { unique: true })
@Index("idx_9087fef939fdd5d6", ["usuarioRealizoAccionId"], {})
@Entity("bitacora", { schema: "public" })
export class Bitacora extends BaseEntity {
  
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_realizo_accion_id" })
  usuarioRealizoAccionId: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "entidad", length: 255 })
  entidad: string;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "fecha_movimiento" })
  fechaMovimiento: Date;

  @Field({ nullable: true })
  @Column("text", { name: "cambio" })
  cambio: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "tipo_accion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  tipoAccion: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "observaciones", nullable: true })
  observaciones: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "direccion_ip", length: 150 })
  direccionIp: string;

  @Field({ nullable: true })
  @Column("integer", { name: "entidad_id" })
  entidadId: number;

  @Field(() => User,{ nullable: true })
  @ManyToOne(() => User, (user) => user.bitacoras)
  @JoinColumn([
    { name: "usuario_realizo_accion_id", referencedColumnName: "id" },
  ])
  usuarioRealizoAccion: User;
}
