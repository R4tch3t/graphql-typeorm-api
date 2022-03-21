import { Column, Entity, Index, OneToMany } from "typeorm";
import { Factura } from "./Factura";

@Index("proveedor_pkey", ["id"], { unique: true })
@Entity("proveedor", { schema: "control_patrimonial" })
export class Proveedor {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "razon_social", length: 255 })
  razonSocial: string;

  @Column("character varying", { name: "rfc", length: 13 })
  rfc: string;

  @Column("character varying", { name: "nombre_comercial", length: 255 })
  nombreComercial: string;

  @Column("character varying", { name: "representante_legal", length: 50 })
  representanteLegal: string;

  @Column("text", { name: "direccion" })
  direccion: string;

  @Column("character varying", { name: "email", length: 50 })
  email: string;

  @Column("character varying", { name: "tel_oficina", length: 20 })
  telOficina: string;

  @Column("character varying", { name: "celular", length: 20 })
  celular: string;

  @Column("character varying", { name: "ciudad", length: 50 })
  ciudad: string;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @OneToMany(() => Factura, (factura) => factura.proveedor)
  facturas: Factura[];
}
