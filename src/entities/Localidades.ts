import {
  BaseEntity,
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
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Index("localidades_pkey", ["id"], { unique: true })
@Index("idx_7a9712da58bc1be0", ["municipioId"], {})
@Entity("localidades", { schema: "public" })
export class Localidades extends BaseEntity {

  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("integer", { name: "municipio_id" })
  municipioId: number;

  @Field({ nullable: true })
  @Column("integer", { name: "clave" })
  clave: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Field({ nullable: true })
  @Column("integer", { name: "clave_municipio" })
  claveMunicipio: number;

  @Field({ nullable: true })
  @Column("character varying", { name: "ambito", length: 1 })
  ambito: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "latitud", length: 20 })
  latitud: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "longitud", length: 20 })
  longitud: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "altitud", length: 20 })
  altitud: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "clave_carta", length: 20 })
  claveCarta: string;

  @Field({ nullable: true })
  @Column("integer", { name: "clave_entidad" })
  claveEntidad: number;

  @Field(() => [Citizen], { nullable: true })
  @OneToMany(() => Citizen, (citizen) => citizen.locality)
  citizens: Citizen[];

  @Field(() => [Dependencia], { nullable: true })
  @OneToMany(() => Dependencia, (dependencia) => dependencia.locality)
  dependencias: Dependencia[];

  @Field(() => Municipios, { nullable: true })
  @ManyToOne(() => Municipios, (municipios) => municipios.localidades)
  @JoinColumn([{ name: "municipio_id", referencedColumnName: "id" }])
  municipio: Municipios;

  @Field(() => [Meretriz], { nullable: true })
  @OneToMany(() => Meretriz, (meretriz) => meretriz.locality)
  meretrizs: Meretriz[];

  @Field(() => [Negocio], { nullable: true })
  @OneToMany(() => Negocio, (negocio) => negocio.localidad)
  negocios: Negocio[];

  //@Field(() => [NegocioPropietario], { nullable: true })
  @OneToMany(
    () => NegocioPropietario,
    (negocioPropietario) => negocioPropietario.localidad
  )
  negocioPropietarios: NegocioPropietario[];
  
  //@Field(() => [ShopDetail], { nullable: true })
  @OneToMany(() => ShopDetail, (shopDetail) => shopDetail.locality)
  shopDetails: ShopDetail[];
  
  //@Field(() => [ShopOwner], { nullable: true })
  @OneToMany(() => ShopOwner, (shopOwner) => shopOwner.locality)
  shopOwners: ShopOwner[];
}
