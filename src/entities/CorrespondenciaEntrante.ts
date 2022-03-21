import {
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

@Index("idx_69eaf79b738c9cd0", ["atencionTipoId"], {})
@Index("idx_69eaf79b194ebe0d", ["dependenciaEmisoraId"], {})
@Index("correspondencia_entrante_pkey", ["id"], { unique: true })
@Index("idx_69eaf79b45fb6de0", ["uresDestinoId"], {})
@Index("idx_69eaf79bdb38439e", ["usuarioId"], {})
@Entity("correspondencia_entrante", { schema: "correspondencia" })
export class CorrespondenciaEntrante {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "dependencia_emisora_id" })
  dependenciaEmisoraId: number;

  @Column("integer", { name: "atencion_tipo_id" })
  atencionTipoId: number;

  @Column("integer", { name: "ures_destino_id" })
  uresDestinoId: number;

  @Column("integer", { name: "usuario_id" })
  usuarioId: number;

  @Column("character varying", {
    name: "nombre_funcionario_emisor",
    length: 150,
  })
  nombreFuncionarioEmisor: string;

  @Column("character varying", {
    name: "puesto_funcioanrio_emisor",
    length: 150,
  })
  puestoFuncioanrioEmisor: string;

  @Column("character varying", { name: "nombre_entrega", length: 150 })
  nombreEntrega: string;

  @Column("date", { name: "fecha_oficio" })
  fechaOficio: string;

  @Column("character varying", { name: "asunto", length: 255 })
  asunto: string;

  @Column("character varying", { name: "numero_oficio", length: 50 })
  numeroOficio: string;

  @Column("date", { name: "fecha_recepcion" })
  fechaRecepcion: string;

  @Column("date", { name: "fecha_limite_atencion" })
  fechaLimiteAtencion: string;

  @Column("integer", { name: "funcionario_destino" })
  funcionarioDestino: number;

  @Column("character varying", { name: "archivo", nullable: true, length: 100 })
  archivo: string | null;

  @Column("text", { name: "obervaciones", nullable: true })
  obervaciones: string | null;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @ManyToOne(
    () => AtencionTipo,
    (atencionTipo) => atencionTipo.correspondenciaEntrantes
  )
  @JoinColumn([{ name: "atencion_tipo_id", referencedColumnName: "id" }])
  atencionTipo: AtencionTipo;

  @ManyToOne(
    () => Dependencia,
    (dependencia) => dependencia.correspondenciaEntrantes
  )
  @JoinColumn([{ name: "dependencia_emisora_id", referencedColumnName: "id" }])
  dependenciaEmisora: Dependencia;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.correspondenciaEntrantes
  )
  @JoinColumn([{ name: "ures_destino_id", referencedColumnName: "id" }])
  uresDestino: ResponsableUnit;

  @ManyToOne(() => User, (user) => user.correspondenciaEntrantes)
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: User;

  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.correspondencia)
  seguimientos: Seguimiento[];
}
