import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AtencionTipo } from "./AtencionTipo";
import { Dependencia } from "./Dependencia";
import { ResponsableUnit } from "./ResponsableUnit";
import { User } from "./User";
import { Seguimiento } from "./Seguimiento";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Index("idx_69eaf79b738c9cd0", ["atencionTipoId"], {})
@Index("idx_69eaf79b194ebe0d", ["dependenciaEmisoraId"], {})
@Index("correspondencia_entrante_pkey", ["id"], { unique: true })
@Index("idx_69eaf79b45fb6de0", ["uresDestinoId"], {})
@Index("idx_69eaf79bdb38439e", ["usuarioId"], {})
@Entity("correspondencia_entrante", { schema: "correspondencia" })

export class CorrespondenciaEntrante extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "dependencia_emisora_id" })
  dependenciaEmisoraId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "atencion_tipo_id" })
  atencionTipoId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "ures_destino_id" })
  uresDestinoId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "usuario_id" })
  usuarioId: number;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "nombre_funcionario_emisor",
    length: 150,
  })
  nombreFuncionarioEmisor: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "puesto_funcioanrio_emisor",
    length: 150,
  })
  puestoFuncioanrioEmisor: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre_entrega", length: 150 })
  nombreEntrega: string;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_oficio" })
  fechaOficio: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "asunto", length: 255 })
  asunto: string; 

  @Field({ nullable: true })
  @Column("character varying", { name: "numero_oficio", length: 50 })
  numeroOficio: string;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_recepcion" })
  fechaRecepcion: string;

  @Field({ nullable: true })
  @Column("date", { name: "fecha_limite_atencion" })
  fechaLimiteAtencion: string;

  @Field({ nullable: true })
  @Column("integer", { name: "funcionario_destino" })
  funcionarioDestino: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "archivo", nullable: true, length: 100 })
  archivo: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "obervaciones", nullable: true })
  obervaciones: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Field(() => AtencionTipo,{ nullable: true })
  @ManyToOne(
    () => AtencionTipo,
    (atencionTipo) => atencionTipo.correspondenciaEntrantes
  )
  @JoinColumn([{ name: "atencion_tipo_id", referencedColumnName: "id" }])
  atencionTipo: AtencionTipo;
  
  @Field(() => Dependencia,{ nullable: true })
  @ManyToOne(
    () => Dependencia,
    (dependencia) => dependencia.correspondenciaEntrantes
  )
  @JoinColumn([{ name: "dependencia_emisora_id", referencedColumnName: "id" }])
  dependenciaEmisora: Dependencia;
  
  @Field(() => ResponsableUnit,{ nullable: true })
  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.correspondenciaEntrantes
  )
  @JoinColumn([{ name: "ures_destino_id", referencedColumnName: "id" }])
  uresDestino: ResponsableUnit;
  
  @Field(() => User,{ nullable: true })
  @ManyToOne(() => User, (user) => user.correspondenciaEntrantes)
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: User;
  
  @Field(() => [Seguimiento],{ nullable: true })
  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.correspondencia)
  seguimientos: Seguimiento[];
}
