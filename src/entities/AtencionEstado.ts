import { Column, Entity, Index, OneToMany } from "typeorm";
import { Seguimiento } from "./Seguimiento";
import { SolicitudCiudadana } from "./SolicitudCiudadana";

@Index("atencion_estado_pkey", ["id"], { unique: true })
@Entity("atencion_estado", { schema: "correspondencia" })
export class AtencionEstado {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.estatus)
  seguimientos: Seguimiento[];

  @OneToMany(
    () => SolicitudCiudadana,
    (solicitudCiudadana) => solicitudCiudadana.estadoAtencion
  )
  solicitudCiudadanas: SolicitudCiudadana[];
}
