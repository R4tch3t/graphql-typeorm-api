import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ActividadEconomica } from "./ActividadEconomica";
import { Negocio } from "./Negocio";

@Index("idx_96d865f6cadd19e", ["actividadEconomicaId"], {})
@Index("act_econ_con_negocio_pkey", ["id"], { unique: true })
@Index("idx_96d865f7d879e4f", ["negocioId"], {})
@Entity("act_econ_con_negocio", { schema: "licencias_comerciales" })
export class ActEconConNegocio {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "actividad_economica_id" })
  actividadEconomicaId: number;

  @Column("integer", { name: "negocio_id" })
  negocioId: number;

  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("timestamp without time zone", {
    name: "fecha_actualizacion",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  fechaActualizacion: Date | null;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @ManyToOne(
    () => ActividadEconomica,
    (actividadEconomica) => actividadEconomica.actEconConNegocios
  )
  @JoinColumn([{ name: "actividad_economica_id", referencedColumnName: "id" }])
  actividadEconomica: ActividadEconomica;

  @ManyToOne(() => Negocio, (negocio) => negocio.actEconConNegocios)
  @JoinColumn([{ name: "negocio_id", referencedColumnName: "id" }])
  negocio: Negocio;
}
