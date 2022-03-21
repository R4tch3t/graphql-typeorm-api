import { Column, Entity, Index, OneToMany } from "typeorm";
import { Shop } from "./Shop";

@Index("negocio_giro_pkey", ["id"], { unique: true })
@Entity("negocio_giro", { schema: "salud_municipal" })
export class NegocioGiro {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @OneToMany(() => Shop, (shop) => shop.shopType)
  shops: Shop[];
}
