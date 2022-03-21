import { Column, Entity, Index, OneToMany } from "typeorm";
import { Dependencia } from "./Dependencia";

@Index("dependencia_tipos_pkey", ["id"], { unique: true })
@Entity("dependencia_tipos", { schema: "correspondencia" })
export class DependenciaTipos {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(() => Dependencia, (dependencia) => dependencia.dependenciaTipo)
  dependencias: Dependencia[];
}
