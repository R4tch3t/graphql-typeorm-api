import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Index("bitacora_pkey", ["id"], { unique: true })
@Index("idx_9087fef939fdd5d6", ["usuarioRealizoAccionId"], {})
@Entity("bitacora", { schema: "public" })
export class Bitacora {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "usuario_realizo_accion_id" })
  usuarioRealizoAccionId: number;

  @Column("character varying", { name: "entidad", length: 255 })
  entidad: string;

  @Column("timestamp without time zone", { name: "fecha_movimiento" })
  fechaMovimiento: Date;

  @Column("text", { name: "cambio" })
  cambio: string;

  @Column("character varying", {
    name: "tipo_accion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  tipoAccion: string | null;

  @Column("text", { name: "observaciones", nullable: true })
  observaciones: string | null;

  @Column("character varying", { name: "direccion_ip", length: 150 })
  direccionIp: string;

  @Column("integer", { name: "entidad_id" })
  entidadId: number;

  @ManyToOne(() => User, (user) => user.bitacoras)
  @JoinColumn([
    { name: "usuario_realizo_accion_id", referencedColumnName: "id" },
  ])
  usuarioRealizoAccion: User;
}
