import {
    Entity,
    Column,
    BaseEntity,
    PrimaryColumn,
    ManyToOne
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  import { Tramite } from "./Tramite";

  @ObjectType()
  @Entity('procedures.requirement')
  export class Requirement extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column("character varying", { name: "description", length: 255 })
      description!: string;
      
      @Field()
      @Column("boolean", { name: "original" })
      original!: boolean;
      
      @Field()
      @Column("smallint", { name: "number_copies" })
      numberCopies!: number;

      @Field({nullable: true}) 
      @Column("character varying", { name: "sample", length: 255 })
      sample!: string;

      @Field()
      @Column("boolean", { name: "active" })
      active!: boolean;

      @Field(()=>Tramite)
      @ManyToOne(() => Tramite, procedure => procedure.requirements)
      procedure_!: Tramite;

  
  }