import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Citizen } from "./Citizen";

@Index("idx_c623ee6ea63c3c2e", ["citizenId"], {})
@Index("meretriz_control_pkey", ["id"], { unique: true })
@Entity("meretriz_control", { schema: "salud_municipal" })
export class MeretrizControl {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "citizen_id" })
  citizenId: number;

  @Column("date", { name: "register_date" })
  registerDate: string;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @Column("boolean", { name: "active" })
  active: boolean;

  @ManyToOne(() => Citizen, (citizen) => citizen.meretrizControls)
  @JoinColumn([{ name: "citizen_id", referencedColumnName: "id" }])
  citizen: Citizen;
}
