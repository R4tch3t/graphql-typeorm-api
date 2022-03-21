import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AtencionTipo } from "./AtencionTipo";
import { AtencionEstado } from "./AtencionEstado";
import { ResponsableUnit } from "./ResponsableUnit";
import { User } from "./User";

@Index("idx_83b42608738c9cd0", ["atencionTipoId"], {})
@Index("idx_83b4260820d836a0", ["estadoAtencionId"], {})
@Index("solicitud_ciudadana_pkey", ["id"], { unique: true })
@Index("idx_83b42608d48e6755", ["uresId"], {})
@Index("idx_83b42608db38439e", ["usuarioId"], {})
@Entity("solicitud_ciudadana", { schema: "correspondencia" })
export class SolicitudCiudadana {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "usuario_id" })
  usuarioId: number;

  @Column("integer", { name: "atencion_tipo_id" })
  atencionTipoId: number;

  @Column("integer", { name: "ures_id" })
  uresId: number;

  @Column("integer", { name: "estado_atencion_id", nullable: true })
  estadoAtencionId: number | null;

  @Column("character varying", { name: "asunto", length: 255 })
  asunto: string;

  @Column("date", { name: "fecha_solicitud" })
  fechaSolicitud: string;

  @Column("date", { name: "fecha_recepcion" })
  fechaRecepcion: string;

  @Column("date", { name: "fecha_limite_atencion", nullable: true })
  fechaLimiteAtencion: string | null;

  @Column("character varying", { name: "funcionario_destino", length: 255 })
  funcionarioDestino: string;

  @Column("character varying", { name: "archivo", length: 255 })
  archivo: string;

  @Column("text", { name: "testo_solicitud", nullable: true })
  testoSolicitud: string | null;

  @Column("integer", { name: "forma_recepcion" })
  formaRecepcion: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @ManyToOne(
    () => AtencionTipo,
    (atencionTipo) => atencionTipo.solicitudCiudadanas
  )
  @JoinColumn([{ name: "atencion_tipo_id", referencedColumnName: "id" }])
  atencionTipo: AtencionTipo;

  @ManyToOne(
    () => AtencionEstado,
    (atencionEstado) => atencionEstado.solicitudCiudadanas
  )
  @JoinColumn([{ name: "estado_atencion_id", referencedColumnName: "id" }])
  estadoAtencion: AtencionEstado;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.solicitudCiudadanas
  )
  @JoinColumn([{ name: "ures_id", referencedColumnName: "id" }])
  ures: ResponsableUnit;

  @ManyToOne(() => User, (user) => user.solicitudCiudadanas)
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: User;
}
