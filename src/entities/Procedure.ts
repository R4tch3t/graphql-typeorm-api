import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttentionModule } from "./AttentionModule";
import { Costo } from "./Costo";
import { DownloadableFormat } from "./DownloadableFormat";
import { FundamentoJuridico } from "./FundamentoJuridico";
import { OtroRequisito } from "./OtroRequisito";
import { ProcedimientoPresencial } from "./ProcedimientoPresencial";
import { ProcedimientoWeb } from "./ProcedimientoWeb";
import { ResponsableUnit } from "./ResponsableUnit";
import { TipoTramite } from "./TipoTramite";
import { Requirement } from "./Requirement";
import { RequisitoAdicional } from "./RequisitoAdicional";
import { TramitePregunta } from "./TramitePregunta";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Index("procedure_pkey", ["id"], { unique: true })
@Index("idx_3e08d70effa0c224", ["responsableUnitId"], {})
@Index("idx_3e08d70ee472ccfe", ["responsableUnitId"], {})
@Index("idx_3e08d70ea9276e6c", ["tipoId"], {})
@Entity("procedure", { schema: "procedures" })

export class Procedure extends BaseEntity {
  
  @Field({ nullable: false })
  //@Column("integer", { primary: true, name: "id" })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column("integer", { name: "responsable_unit_id" })
  responsableUnitId: number;

  @Field({ nullable: false })
  @Column("character varying", { name: "nombre", length: 255 })
  name: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "short_name",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  shortName: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "key", length: 10 })
  key: string;

  @Field({ nullable: true })
  @Column("text", { name: "description" })
  description: string;

  @Field({ nullable: true })
  @Column("character varying", { name: "benefit", length: 255 })
  benefit: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "has_validity" })
  hasValidity: boolean;

  @Field({ nullable: true })
  @Column("date", { name: "beginning_validity", nullable: true })
  beginningValidity: string | null;

  @Field({ nullable: true })
  @Column("date", { name: "end_validity", nullable: true })
  endValidity: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "requires_electronic_signature" })
  requiresElectronicSignature: boolean;

  @Field({ nullable: true })
  @Column("character varying", { name: "who_is_it_for", length: 255 })
  whoIsItFor: string;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Field({ nullable: true })
  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Field({ nullable: true })
  @Column("integer", { name: "user_created" })
  userCreated: number;

  @Field({ nullable: true })
  @Column("integer", { name: "user_updated", nullable: true })
  userUpdated: number | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "document_obtained",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  documentObtained: string | null;

  @Field({ nullable: true })
  @Column("numeric", {
    name: "cost",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "NULL::numeric",
  })
  cost: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "response_time" })
  responseTime: number;

  @Field({ nullable: true })
  @Column("text", { name: "conditions", nullable: true })
  conditions: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "legal_basis" })
  legalBasis: string;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "website",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  website: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "free" })
  free: boolean;

  @Field({ nullable: true })
  @Column("boolean", { name: "published" })
  published: boolean;

  @Field({ nullable: true })
  @Column("boolean", { name: "active" })
  active: boolean;

  @Field({ nullable: true })
  @Column("character varying", { name: "validity_document", length: 60 })
  validityDocument: string;

  @Field({ nullable: true })
  @Column("text", { name: "module_procedure", nullable: true })
  moduleProcedure: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "online_procedure", nullable: true })
  onlineProcedure: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "validated", nullable: true })
  validated: boolean | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "elaboro",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  elaboro: string | null;

  @Field({ nullable: true })
  @Column("character varying", {
    name: "reviso",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  reviso: string | null;

  @Field({ nullable: true })
  @Column("date", { name: "ultima_actualizacion", nullable: true })
  ultimaActualizacion: string | null;

  @Field({ nullable: true })
  @Column("character varying", { name: "homoclave", length: 50 })
  homoclave: string;

  @Field({ nullable: true })
  @Column("integer", { name: "nivel_gobierno" })
  nivelGobierno: number;

  @Field({ nullable: true })
  @Column("integer", { name: "tipo_id", nullable: true })
  tipoId: number | null;

  @Field({ nullable: true })
  @Column("integer", { name: "tipo_persona", nullable: true })
  tipoPersona: number | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "oferta_citas", nullable: true })
  ofertaCitas: boolean | null;

  @Field({ nullable: true })
  @Column("text", { name: "categoria", nullable: true })
  categoria: string | null;
  
  @Field(()=>Int,{ nullable: true })
  count: number

  @Field(()=>[AttentionModule],{ nullable: true })
  @OneToMany(
    () => AttentionModule,
    (attentionModule) => attentionModule.procedure
  )
  attentionModules: AttentionModule[];
  
  @Field(()=>[Costo],{ nullable: true })
  @OneToMany(() => Costo, (costo) => costo.procedure)
  costos: Costo[];
  
  @Field(()=>[DownloadableFormat],{ nullable: true })
  @OneToMany(
    () => DownloadableFormat,
    (downloadableFormat) => downloadableFormat.procedure
  )
  downloadableFormats: DownloadableFormat[];
  
  @Field(()=>[FundamentoJuridico],{ nullable: true })
  @OneToMany(
    () => FundamentoJuridico,
    (fundamentoJuridico) => fundamentoJuridico.procedure
  )
  fundamentoJuridicos: FundamentoJuridico[];
  
  @Field(()=>[OtroRequisito],{ nullable: true })
  @OneToMany(() => OtroRequisito, (otroRequisito) => otroRequisito.procedure)
  otroRequisitos: OtroRequisito[];
  
  @Field(()=>[ProcedimientoPresencial],{ nullable: true })
  @OneToMany(
    () => ProcedimientoPresencial,
    (procedimientoPresencial) => procedimientoPresencial.procedure
  )
  procedimientoPresencials: ProcedimientoPresencial[];

  @Field(()=>[ProcedimientoWeb],{ nullable: true })
  @OneToMany(
    () => ProcedimientoWeb,
    (procedimientoWeb) => procedimientoWeb.procedure
  )
  procedimientoWebs: ProcedimientoWeb[];
  
  @Field(()=>TipoTramite,{ nullable: true })
  @ManyToOne(() => TipoTramite, (tipoTramite) => tipoTramite.procedures)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: TipoTramite;
  
  @Field(()=>[Requirement],{ nullable: true })
  @OneToMany(() => Requirement, (requirement) => requirement.procedure)
  requirements: Requirement[];
  
  @Field(()=>[RequisitoAdicional],{ nullable: true })
  @OneToMany(
    () => RequisitoAdicional,
    (requisitoAdicional) => requisitoAdicional.procedure
  )
  requisitoAdicionals: RequisitoAdicional[];
  
  @Field(()=>[TramitePregunta],{ nullable: true })
  @OneToMany(
    () => TramitePregunta,
    (tramitePregunta) => tramitePregunta.tramite
  )
  tramitePreguntas: TramitePregunta[];

  @Field(()=>ResponsableUnit)
  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.procedures
  )
  @JoinColumn([{ name: "responsable_unit_id", referencedColumnName: "id" }])
  responsableUnit: ResponsableUnit;
}
