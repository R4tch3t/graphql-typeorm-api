import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Localidades } from "./Localidades";
import { Shop } from "./Shop";

@Index("shop_owner_pkey", ["id"], { unique: true })
@Index("idx_3d584fe088823a92", ["localityId"], {})
@Index("idx_3d584fe04d16c4dd", ["shopId"], {})
@Entity("shop_owner", { schema: "salud_municipal" })
export class ShopOwner {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "shop_id" })
  shopId: number;

  @Column("integer", { name: "locality_id" })
  localityId: number;

  @Column("character varying", {
    name: "legal_agent",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  legalAgent: string | null;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @Column("character varying", { name: "first_name", length: 100 })
  firstName: string;

  @Column("character varying", { name: "first_second_name", length: 100 })
  firstSecondName: string;

  @Column("character varying", { name: "second_last_name", length: 100 })
  secondLastName: string;

  @Column("character varying", { name: "phone_number", length: 15 })
  phoneNumber: string;

  @Column("character varying", { name: "email", length: 100 })
  email: string;

  @ManyToOne(() => Localidades, (localidades) => localidades.shopOwners)
  @JoinColumn([{ name: "locality_id", referencedColumnName: "id" }])
  locality: Localidades;

  @ManyToOne(() => Shop, (shop) => shop.shopOwners)
  @JoinColumn([{ name: "shop_id", referencedColumnName: "id" }])
  shop: Shop;
}
