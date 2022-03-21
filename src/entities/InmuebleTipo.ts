import { Column, Entity, Index, OneToMany } from "typeorm";
import { Shop } from "./Shop";

@Index("inmueble_tipo_pkey", ["id", "id"], { unique: true })
@Entity("inmueble_tipo", { schema: "salud_municipal" })
export class InmuebleTipo {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("timestamp without time zone", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("timestamp without time zone", { name: "fecha_actualizacion" })
  fechaActualizacion: Date;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("integer", { name: "usuario_modifico" })
  usuarioModifico: number;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToMany(() => Shop, (shop) => shop.proportyType)
  shops: Shop[];
}
