import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";
import { User } from "./User";

@ObjectType()
@Index("tramite_pregunta_pkey", ["id"], { unique: true })
@Index("idx_ab85a447820c2849", ["tramiteId"], {})
@Index("idx_ab85a447b3698cc1", ["usuarioCreoId"], {})
@Index("idx_ab85a447c5617d3f", ["usuarioModificoId"], {})
@Entity("tramite_pregunta", { schema: "procedures" })
export class TramitePregunta extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "tramite_id" })
  tramiteId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_creo_id", nullable: true })
  usuarioCreoId: number | null;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_modifico_id", nullable: true })
  usuarioModificoId: number | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "pregunta", length: 255 })
  pregunta: string;

  @Field({ nullable: true })
  @Column("text", { name: "respuesta" })
  respuesta: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_actualizacion" })
  fechaActualizacion: string;

  @ManyToOne(() => Procedure, (procedure) => procedure.tramitePreguntas)
  @JoinColumn([{ name: "tramite_id", referencedColumnName: "id" }])
  tramite: Procedure;

  @ManyToOne(() => User, (user) => user.tramitePreguntas)
  @JoinColumn([{ name: "usuario_creo_id", referencedColumnName: "id" }])
  usuarioCreo: User;

  @ManyToOne(() => User, (user) => user.tramitePreguntas2)
  @JoinColumn([{ name: "usuario_modifico_id", referencedColumnName: "id" }])
  usuarioModifico: User;
}
