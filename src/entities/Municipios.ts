import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Localidades } from "./Localidades";
import { EntidadesFederativas } from "./EntidadesFederativas";

@Index("idx_bbfab5866961924a", ["entidadFederativaId"], {})
@Index("municipios_pkey", ["id"], { unique: true })
@Entity("municipios", { schema: "public" })
export class Municipios {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "entidad_federativa_id" })
  entidadFederativaId: number;

  @Column("integer", { name: "clave" })
  clave: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", { name: "clave_cabecera", length: 100 })
  claveCabecera: string;

  @Column("character varying", { name: "nombre_cabecera", length: 100 })
  nombreCabecera: string;

  @OneToMany(() => Localidades, (localidades) => localidades.municipio)
  localidades: Localidades[];

  @ManyToOne(
    () => EntidadesFederativas,
    (entidadesFederativas) => entidadesFederativas.municipios
  )
  @JoinColumn([{ name: "entidad_federativa_id", referencedColumnName: "id" }])
  entidadFederativa: EntidadesFederativas;
}
