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
  @Entity('procedures.tramite_pregunta')
  export class TramitePregunta extends BaseEntity {
  
      @Field({ nullable: true })
      @PrimaryColumn()
      id!: number;
  
      @Field() 
      @Column("character varying", { name: "pregunta", length: 255 })
      pregunta!: string;
      
      @Field() 
      @Column("text", { name: "respuesta" })
      respuesta!: string;

      @Field()
      @Column("boolean", { name: "activo" })
      activo!: boolean;

      @Field(()=>Tramite)
      @ManyToOne(() => Tramite, procedure => procedure.reqAds)
      tramite_!: Tramite;

  
  }