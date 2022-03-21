import { Column, Entity, Index, OneToMany } from "typeorm";
import { Municipios } from "./Municipios";

@Index("entidades_federativas_pkey", ["id"], { unique: true })
@Entity("entidades_federativas", { schema: "public" })
export class EntidadesFederativas {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", { name: "abreviatura", length: 10 })
  abreviatura: string;

  @OneToMany(() => Municipios, (municipios) => municipios.entidadFederativa)
  municipios: Municipios[];
}
