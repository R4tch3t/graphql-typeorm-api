import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Citizen } from "./Citizen";
import { Dependencia } from "./Dependencia";
import { Municipios } from "./Municipios";
import { Meretriz } from "./Meretriz";
import { Negocio } from "./Negocio";
import { NegocioPropietario } from "./NegocioPropietario";
import { ShopDetail } from "./ShopDetail";
import { ShopOwner } from "./ShopOwner";

@Index("localidades_pkey", ["id"], { unique: true })
@Index("idx_7a9712da58bc1be0", ["municipioId"], {})
@Entity("localidades", { schema: "public" })
export class Localidades {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "municipio_id" })
  municipioId: number;

  @Column("integer", { name: "clave" })
  clave: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("integer", { name: "clave_municipio" })
  claveMunicipio: number;

  @Column("character varying", { name: "ambito", length: 1 })
  ambito: string;

  @Column("character varying", { name: "latitud", length: 20 })
  latitud: string;

  @Column("character varying", { name: "longitud", length: 20 })
  longitud: string;

  @Column("character varying", { name: "altitud", length: 20 })
  altitud: string;

  @Column("character varying", { name: "clave_carta", length: 20 })
  claveCarta: string;

  @Column("integer", { name: "clave_entidad" })
  claveEntidad: number;

  @OneToMany(() => Citizen, (citizen) => citizen.locality)
  citizens: Citizen[];

  @OneToMany(() => Dependencia, (dependencia) => dependencia.locality)
  dependencias: Dependencia[];

  @ManyToOne(() => Municipios, (municipios) => municipios.localidades)
  @JoinColumn([{ name: "municipio_id", referencedColumnName: "id" }])
  municipio: Municipios;

  @OneToMany(() => Meretriz, (meretriz) => meretriz.locality)
  meretrizs: Meretriz[];

  @OneToMany(() => Negocio, (negocio) => negocio.localidad)
  negocios: Negocio[];

  @OneToMany(
    () => NegocioPropietario,
    (negocioPropietario) => negocioPropietario.localidad
  )
  negocioPropietarios: NegocioPropietario[];

  @OneToMany(() => ShopDetail, (shopDetail) => shopDetail.locality)
  shopDetails: ShopDetail[];

  @OneToMany(() => ShopOwner, (shopOwner) => shopOwner.locality)
  shopOwners: ShopOwner[];
}
