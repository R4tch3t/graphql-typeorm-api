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
  @Entity('procedures.attention_module')
  export class AttModule extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column("character varying", { name: "name", length: 120 })
      name!: string;
      
      @Field()
      @Column("character varying", { name: "person_in_charge", length: 255 })
      personInCharge!: string;
      
      @Field()
      @Column("character varying", { name: "phones", length: 255 })
      phones!: string;

      @Field(()=>Tramite)
      @ManyToOne(() => Tramite, procedure => procedure.attModules)
      procedure_!: Tramite;

  
  }