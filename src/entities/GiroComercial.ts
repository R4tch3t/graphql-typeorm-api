import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TipoGiro } from "./TipoGiro";
import { Negocio } from "./Negocio";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("giro_comercial_pkey", ["id"], { unique: true })
@Index("idx_a3905dda96289aff", ["tipoGiroId"], {})
@Entity("giro_comercial", { schema: "licencias_comerciales" })
export class GiroComercial {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "tipo_giro_id" })
  tipoGiroId: number;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("timestamp without time zone", { name: "fecha_actualizacion" })
  fechaActualizacion: Date;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico" })
  usuarioModifico: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @ManyToOne(() => TipoGiro, (tipoGiro) => tipoGiro.giroComercials)
  @JoinColumn([{ name: "tipo_giro_id", referencedColumnName: "id" }])
  tipoGiro: TipoGiro;

  @OneToMany(() => Negocio, (negocio) => negocio.giroComercial)
  negocios: Negocio[];
}
