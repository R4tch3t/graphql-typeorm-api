import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Localidades } from "./Localidades";
import { Shop } from "./Shop";

@Index("shop_detail_pkey", ["id"], { unique: true })
@Index("idx_d74d985588823a92", ["localityId"], {})
@Index("idx_d74d98554d16c4dd", ["shopId"], {})
@Entity("shop_detail", { schema: "salud_municipal" })
export class ShopDetail {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "shop_id" })
  shopId: number;

  @Column("integer", { name: "locality_id" })
  localityId: number;

  @Column("character varying", { name: "catastral_registry", length: 25 })
  catastralRegistry: string;

  @Column("character varying", { name: "telephone", length: 15 })
  telephone: string;

  @Column("character varying", { name: "street", length: 150 })
  street: string;

  @Column("character varying", { name: "inside_number", length: 100 })
  insideNumber: string;

  @Column("character varying", { name: "outside_number", length: 100 })
  outsideNumber: string;

  @Column("character varying", { name: "neighborhood", length: 150 })
  neighborhood: string;

  @Column("character varying", { name: "postal_code", length: 5 })
  postalCode: string;

  @Column("character varying", {
    name: "first_reference",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  firstReference: string | null;

  @Column("character varying", { name: "second_reference", length: 255 })
  secondReference: string;

  @Column("character varying", { name: "latitud", length: 20 })
  latitud: string;

  @Column("character varying", {
    name: "longitud",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  longitud: string | null;

  @Column("character varying", {
    name: "altitud",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  altitud: string | null;

  @Column("integer", { name: "worker_number", nullable: true })
  workerNumber: number | null;

  @Column("date", { name: "operation_initial_date", nullable: true })
  operationInitialDate: string | null;

  @Column("text", { name: "notes" })
  notes: string;

  @ManyToOne(() => Localidades, (localidades) => localidades.shopDetails)
  @JoinColumn([{ name: "locality_id", referencedColumnName: "id" }])
  locality: Localidades;

  @ManyToOne(() => Shop, (shop) => shop.shopDetails)
  @JoinColumn([{ name: "shop_id", referencedColumnName: "id" }])
  shop: Shop;
}
