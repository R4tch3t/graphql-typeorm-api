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
  @Entity('procedures.downloadable_format')
  export class DownloadableFormat extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column("character varying", { name: "name", length: 120 })
      name!: string;
  
      @Field() 
      @Column("text", { name: "description" })
      description!: string;

      @Field()
      @Column("character varying", { name: "document", length: 255 })
      document!: string;

      @Field(()=>Tramite)
      @ManyToOne(() => Tramite, procedure => procedure.downloadableFormats)
      procedure_!: Tramite;

  
  }