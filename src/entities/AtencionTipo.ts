import { Column, Entity, Index, OneToMany } from "typeorm";
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { SolicitudCiudadana } from "./SolicitudCiudadana";

@Index("atencion_tipo_pkey", ["id"], { unique: true })
@Entity("atencion_tipo", { schema: "correspondencia" })
export class AtencionTipo {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "descripcion", length: 100 })
  descripcion: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.atencionTipo
  )
  correspondenciaEntrantes: CorrespondenciaEntrante[];

  @OneToMany(
    () => SolicitudCiudadana,
    (solicitudCiudadana) => solicitudCiudadana.atencionTipo
  )
  solicitudCiudadanas: SolicitudCiudadana[];
}
