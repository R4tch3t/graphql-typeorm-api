import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Procedure } from "./Procedure";

@ObjectType()
@Index("fundamento_juridico_pkey", ["id"], { unique: true })
@Index("idx_851fc04e1624bcd2", ["procedureId"], {})
@Entity("fundamento_juridico", { schema: "procedures" })
export class FundamentoJuridico extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "procedure_id" })
  procedureId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "ambito" })
  ambito: number;

  @Field({ nullable: true })
  @Column("integer", { name: "tipo" })
  tipo: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "articulo", length: 255 })
  articulo: string;

  @Column("boolean", { name: "active" })
  active: boolean;

  @Column("character varying", {
    name: "articulo_fraccion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  articuloFraccion: string | null;

  @Column("character varying", {
    name: "articulo_fraccion_parrafo",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  articuloFraccionParrafo: string | null;

  @ManyToOne(() => Procedure, (procedure) => procedure.fundamentoJuridicos)
  @JoinColumn([{ name: "procedure_id", referencedColumnName: "id" }])
  procedure: Procedure;
}
