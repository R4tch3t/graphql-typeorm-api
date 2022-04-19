import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Bien } from "./Bien";
import { Proveedor } from "./Proveedor";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("factura_pkey", ["id"], { unique: true })
@Index("idx_84c03c73cb305d73", ["proveedorId"], {})
@Entity("factura", { schema: "control_patrimonial" })
export class Factura {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "proveedor_id" })
  proveedorId: number;

  @Column("date", { name: "fecha_factura" })
  fechaFactura: string;

  @Column("double precision", { name: "cantidad", precision: 53 })
  cantidad: number;

  @Column("double precision", { name: "importe", precision: 53 })
  importe: number;

  @Column("double precision", { name: "iva", precision: 53 })
  iva: number;

  @Column("character varying", { name: "num_factura", length: 255 })
  numFactura: string;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @OneToMany(() => Bien, (bien) => bien.factura)
  biens: Bien[];

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.facturas)
  @JoinColumn([{ name: "proveedor_id", referencedColumnName: "id" }])
  proveedor: Proveedor;
}
