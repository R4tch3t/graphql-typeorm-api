import {
    Entity,
    Column,
    BaseEntity,
    PrimaryColumn,
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  
  @ObjectType()
  @Entity("vw_tramites_ures", { schema: "procedures" })
  export class VwProcedure extends BaseEntity {
  
      @Field(() => Int)
      @PrimaryColumn()
      ures!: number;

      @Field(() => String) 
      @Column()
      ures_nombre!: string;

      @Field(() => Int)
      @Column("int", { default: 0 })
      cantidad!: number;
  
  
  }