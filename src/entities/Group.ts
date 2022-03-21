import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { User } from "./User";

@Index("group_pkey", ["id"], { unique: true })
@Entity("group", { schema: "public" })
export class Group {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 60 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @ManyToMany(() => User, (user) => user.groups)
  @JoinTable({
    name: "user_group",
    joinColumns: [{ name: "group_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "user_id", referencedColumnName: "id" }],
    schema: "public",
  })
  users: User[];
}
