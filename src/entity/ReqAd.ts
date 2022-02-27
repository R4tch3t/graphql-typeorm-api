import {
    Entity,
    Column,
    BaseEntity,
    PrimaryColumn,
    ManyToOne
  } from "typeorm";
  import { Field, ObjectType } from "type-graphql";
  import { Tramite } from "./Tramite";

  @ObjectType()
  @Entity('procedures.requisito_adicional')
  export class ReqAd extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column("character varying", { name: "nombre", length: 255 })
      nombre!: string;
      
      @Field() 
      @Column("text", { name: "descripcion" })
      descripcion!: string;

      @Field()
      @Column("boolean", { name: "activo" })
      activo!: boolean;

      @Field(()=>Tramite)
      @ManyToOne(() => Tramite, procedure => procedure.reqAds)
      procedure_!: Tramite;

  
  }