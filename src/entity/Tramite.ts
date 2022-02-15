import {
    Entity,
    Column,
    BaseEntity,
    PrimaryColumn,
    OneToMany
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  import { DownloadableFormat } from "./DownloadableFormat";
  import { AttModule } from "./AttModule";
  import { Requirement } from "./Requirement";
  import { ReqAd } from "./ReqAd";
  import { TramitePregunta } from "./TramitePregunta";

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

      @Field(()=>[DownloadableFormat])
      @OneToMany(() => DownloadableFormat, downloadableFormat => downloadableFormat.procedure_)
      downloadableFormats!: DownloadableFormat[];

      @Field(()=>[AttModule])
      @OneToMany(() => AttModule, attModule => attModule.procedure_)
      attModules!: AttModule[];

      @Field(()=>[Requirement],{nullable: true})
      @OneToMany(() => Requirement, requirement => requirement.procedure_)
      requirements!: Requirement[];

      @Field(()=>[ReqAd],{nullable: true})
      @OneToMany(() => ReqAd, reqAd => reqAd.procedure_)
      reqAds!: ReqAd[];

      @Field(()=>[TramitePregunta],{nullable: true})
      @OneToMany(() => TramitePregunta, tramitePregunta => tramitePregunta.tramite_)
      tramitePreguntas!: TramitePregunta[];

  
  }