import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Bien } from "./Bien";
import { Marca } from "./Marca";
import { TipoAuto } from "./TipoAuto";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("uniq_9be95368bd95b80f", ["bienId"], { unique: true })
@Index("parque_vehicular_pkey", ["id"], { unique: true })
@Index("uniq_9be9536881ef0041", ["marcaId"], { unique: true })
@Index("idx_9be95368eac9885", ["tipoAutoId"], {})
@Entity("parque_vehicular", { schema: "control_patrimonial" })
export class ParqueVehicular {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "bien_id" })
  bienId: number;

  @Column("integer", { name: "tipo_auto_id" })
  tipoAutoId: number;

  @Column("integer", { name: "marca_id" })
  marcaId: number;

  @Column("character varying", {
    name: "num_motor",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  numMotor: string | null;

  @Column("character varying", {
    name: "placas",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  placas: string | null;

  @Column("character varying", {
    name: "clase",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  clase: string | null;

  @Column("character varying", {
    name: "color",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  color: string | null;

  @Column("character varying", {
    name: "modelo",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  modelo: string | null;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("integer", { name: "usuario_modifico", nullable: true })
  usuarioModifico: number | null;

  @Column("integer", { name: "usuario_creo" })
  usuarioCreo: number;

  @Column("date", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: string | null;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @OneToOne(() => Bien, (bien) => bien.parqueVehicular)
  @JoinColumn([{ name: "bien_id", referencedColumnName: "id" }])
  bien: Bien;

  @OneToOne(() => Marca, (marca) => marca.parqueVehicular)
  @JoinColumn([{ name: "marca_id", referencedColumnName: "id" }])
  marca: Marca;

  @ManyToOne(() => TipoAuto, (tipoAuto) => tipoAuto.parqueVehiculars)
  @JoinColumn([{ name: "tipo_auto_id", referencedColumnName: "id" }])
  tipoAuto: TipoAuto;
}
