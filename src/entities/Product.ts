import {
    Entity,
    Column,
    BaseEntity,
    PrimaryColumn,
    CreateDateColumn,
    BeforeInsert,
    getManager
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  
  @ObjectType()
  @Entity()
  export class Product extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column()
      name!: string;
  
      @Field(() => Int)
      @Column("int", { default: 0 })
      quantity!: number;
  
      @Field(() => String)
      @CreateDateColumn({ type: 'timestamp'})
      createdAt!: string;
  
      @BeforeInsert()
      async beforeInsert(): Promise<void>{
        const res = await getManager().query("select XE.PRODUCTO_SEQ.nextval ID from dual");
        this.id= res[0].ID;
      }
  
  
  }