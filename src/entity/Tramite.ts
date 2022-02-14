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
  @Entity('procedures.procedure')
  export class Tramite extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column("character varying", { name: "name", length: 255 })
      name!: string;

      @Field() 
      @Column("character varying", {
        name: "short_name",
        nullable: true,
        length: 120,
        default: () => "NULL::character varying",
      })
      shortName!: string;
  
      @Field() 
      @Column("character varying", { name: "key", length: 10 })
      key!: string;
  
      @Field() 
      @Column("text", { name: "description" })
      description!: string;

      @Field()
      @Column("character varying", { name: "benefit", length: 255 })
      benefit!: string;

      @Field()
      @Column("character varying", {
        name: "document_obtained",
        nullable: true,
        length: 120,
        default: () => "NULL::character varying",
      })
      documentObtained!: string;

      @Field()
      @Column("boolean", { name: "active" })
      active!: boolean;

  
  }