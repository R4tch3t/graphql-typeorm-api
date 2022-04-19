import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Meretriz } from "./Meretriz";
import { Shop } from "./Shop";
import { ObjectType } from "type-graphql";

@ObjectType()
@Index("meretriz_job_pkey", ["id"], { unique: true })
@Index("idx_21adb27fd63af17f", ["meretrizId"], {})
@Index("idx_21adb27f4d16c4dd", ["shopId"], {})
@Entity("meretriz_job", { schema: "salud_municipal" })
export class MeretrizJob {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "meretriz_id" })
  meretrizId: number;

  @Column("integer", { name: "shop_id", nullable: true })
  shopId: number | null;

  @Column("date", { name: "initial_date" })
  initialDate: string;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @ManyToOne(() => Meretriz, (meretriz) => meretriz.meretrizJobs)
  @JoinColumn([{ name: "meretriz_id", referencedColumnName: "id" }])
  meretriz: Meretriz;

  @ManyToOne(() => Shop, (shop) => shop.meretrizJobs)
  @JoinColumn([{ name: "shop_id", referencedColumnName: "id" }])
  shop: Shop;
}
