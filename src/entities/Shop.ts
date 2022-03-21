import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MeretrizJob } from "./MeretrizJob";
import { InmuebleTipo } from "./InmuebleTipo";
import { NegocioGiro } from "./NegocioGiro";
import { ShopDetail } from "./ShopDetail";
import { ShopOwner } from "./ShopOwner";

@Index("shop_pkey", ["id"], { unique: true })
@Index("idx_3ef756e876b62e8a", ["proportyTypeId"], {})
@Index("idx_3ef756e8c67fccb9", ["shopTypeId"], {})
@Entity("shop", { schema: "salud_municipal" })
export class Shop {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "shop_type_id" })
  shopTypeId: number;

  @Column("integer", { name: "proporty_type_id", nullable: true })
  proportyTypeId: number | null;

  @Column("character varying", { name: "invoice", length: 50 })
  invoice: string;

  @Column("character varying", { name: "comercial_name", length: 255 })
  comercialName: string;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @OneToMany(() => MeretrizJob, (meretrizJob) => meretrizJob.shop)
  meretrizJobs: MeretrizJob[];

  @ManyToOne(() => InmuebleTipo, (inmuebleTipo) => inmuebleTipo.shops)
  @JoinColumn([{ name: "proporty_type_id", referencedColumnName: "id" }])
  proportyType: InmuebleTipo;

  @ManyToOne(() => NegocioGiro, (negocioGiro) => negocioGiro.shops)
  @JoinColumn([{ name: "shop_type_id", referencedColumnName: "id" }])
  shopType: NegocioGiro;

  @OneToMany(() => ShopDetail, (shopDetail) => shopDetail.shop)
  shopDetails: ShopDetail[];

  @OneToMany(() => ShopOwner, (shopOwner) => shopOwner.shop)
  shopOwners: ShopOwner[];
}
