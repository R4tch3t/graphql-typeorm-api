import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ClasificacionBienes } from "./ClasificacionBienes";
import { CuentaPublica } from "./CuentaPublica";
import { EjercicioFiscal } from "./EjercicioFiscal";
import { Factura } from "./Factura";
import { Fondo } from "./Fondo";
import { Origen } from "./Origen";
import { RamoPrograma } from "./RamoPrograma";
import { StatusProducto } from "./StatusProducto";
import { TipoBien } from "./TipoBien";
import { BienInmueble } from "./BienInmueble";
import { BienMueble } from "./BienMueble";
import { Marca } from "./Marca";
import { ParqueVehicular } from "./ParqueVehicular";

@Index("idx_ab20abac3970e879", ["clasificacionBienId"], {})
@Index("idx_ab20abac21faf070", ["cuentaPublicaId"], {})
@Index("idx_ab20abaca66b0097", ["ejercicioFiscalId"], {})
@Index("idx_ab20abacf04f795f", ["facturaId"], {})
@Index("idx_ab20abacaa510e89", ["fondoId"], {})
@Index("bien_pkey", ["id"], { unique: true })
@Index("idx_ab20abac93529ecd", ["origenId"], {})
@Index("idx_ab20abac85feb484", ["ramoProgramaId"], {})
@Index("idx_ab20abac729f1c7f", ["statusProductoId"], {})
@Index("idx_ab20abacae6c99af", ["tipoBienId"], {})
@Entity("bien", { schema: "control_patrimonial" })
export class Bien {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "factura_id" })
  facturaId: number;

  @Column("integer", { name: "clasificacion_bien_id" })
  clasificacionBienId: number;

  @Column("integer", { name: "cuenta_publica_id" })
  cuentaPublicaId: number;

  @Column("integer", { name: "ejercicio_fiscal_id" })
  ejercicioFiscalId: number;

  @Column("integer", { name: "origen_id" })
  origenId: number;

  @Column("integer", { name: "status_producto_id" })
  statusProductoId: number;

  @Column("integer", { name: "tipo_bien_id" })
  tipoBienId: number;

  @Column("integer", { name: "ramo_programa_id" })
  ramoProgramaId: number;

  @Column("integer", { name: "fondo_id" })
  fondoId: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("integer", { name: "trimestre" })
  trimestre: number;

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

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  descripcion: string | null;

  @ManyToOne(
    () => ClasificacionBienes,
    (clasificacionBienes) => clasificacionBienes.biens
  )
  @JoinColumn([{ name: "clasificacion_bien_id", referencedColumnName: "id" }])
  clasificacionBien: ClasificacionBienes;

  @ManyToOne(() => CuentaPublica, (cuentaPublica) => cuentaPublica.biens)
  @JoinColumn([{ name: "cuenta_publica_id", referencedColumnName: "id" }])
  cuentaPublica: CuentaPublica;

  @ManyToOne(() => EjercicioFiscal, (ejercicioFiscal) => ejercicioFiscal.biens)
  @JoinColumn([{ name: "ejercicio_fiscal_id", referencedColumnName: "id" }])
  ejercicioFiscal: EjercicioFiscal;

  @ManyToOne(() => Factura, (factura) => factura.biens)
  @JoinColumn([{ name: "factura_id", referencedColumnName: "id" }])
  factura: Factura;

  @ManyToOne(() => Fondo, (fondo) => fondo.biens)
  @JoinColumn([{ name: "fondo_id", referencedColumnName: "id" }])
  fondo: Fondo;

  @ManyToOne(() => Origen, (origen) => origen.biens)
  @JoinColumn([{ name: "origen_id", referencedColumnName: "id" }])
  origen: Origen;

  @ManyToOne(() => RamoPrograma, (ramoPrograma) => ramoPrograma.biens)
  @JoinColumn([{ name: "ramo_programa_id", referencedColumnName: "id" }])
  ramoPrograma: RamoPrograma;

  @ManyToOne(() => StatusProducto, (statusProducto) => statusProducto.biens)
  @JoinColumn([{ name: "status_producto_id", referencedColumnName: "id" }])
  statusProducto: StatusProducto;

  @ManyToOne(() => TipoBien, (tipoBien) => tipoBien.biens)
  @JoinColumn([{ name: "tipo_bien_id", referencedColumnName: "id" }])
  tipoBien: TipoBien;

  @OneToOne(() => BienInmueble, (bienInmueble) => bienInmueble.bien)
  bienInmueble: BienInmueble;

  @OneToOne(() => BienMueble, (bienMueble) => bienMueble.bien)
  bienMueble: BienMueble;

  @OneToMany(() => Marca, (marca) => marca.bien)
  marcas: Marca[];

  @OneToOne(() => ParqueVehicular, (parqueVehicular) => parqueVehicular.bien)
  parqueVehicular: ParqueVehicular;
}
