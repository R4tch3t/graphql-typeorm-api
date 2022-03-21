import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("tipo_tramite_pkey", ["id"], { unique: true })
@Entity("tipo_tramite", { schema: "procedures" })
export class TipoTramite extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Field({ nullable: true })
  @Column("text", { name: "descripcion" })
  descripcion: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(() => Procedure, (procedure) => procedure.tipo)
  procedures: Procedure[];
}
