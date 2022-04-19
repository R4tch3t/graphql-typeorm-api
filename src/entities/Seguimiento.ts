import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ResponsableUnit } from "./ResponsableUnit";
import { CorrespondenciaEntrante } from "./CorrespondenciaEntrante";
import { AtencionEstado } from "./AtencionEstado";
import { User } from "./User";import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Index("idx_4de33c52a233b290", ["areaPadreId"], {})
@Index("idx_4de33c52a99009d7", ["areaTurnadaId"], {})
@Index("idx_4de33c524cf0c867", ["correspondenciaId"], {})
@Index("idx_4de33c5259bab351", ["estatusId"], {})
@Index("seguimiento_pkey", ["id"], { unique: true })
@Index("idx_4de33c52b3698cc1", ["usuarioCreoId"], {})
@Index("idx_4de33c52c5617d3f", ["usuarioModificoId"], {})
@Entity("seguimiento", { schema: "correspondencia" })
export class Seguimiento {
  @Field({ nullable: true })
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "correspondencia_id" })
  correspondenciaId: number;

  @Column("integer", { name: "area_padre_id" })
  areaPadreId: number;

  @Column("integer", { name: "usuario_creo_id" })
  usuarioCreoId: number;

  @Column("integer", { name: "usuario_modifico_id" })
  usuarioModificoId: number;

  @Column("integer", { name: "area_turnada_id" })
  areaTurnadaId: number;

  @Column("integer", { name: "estatus_id", nullable: true })
  estatusId: number | null;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Column("text", { name: "notas", nullable: true })
  notas: string | null;

  @Column("boolean", { name: "activo" })
  activo: boolean;

  @Column("date", { name: "fecha_creacion" })
  fechaCreacion: string;

  @Column("date", { name: "fecha_actualizacion" })
  fechaActualizacion: string;

  @Column("character varying", { name: "turnado_para", length: 1 })
  turnadoPara: string;

  @Column("character varying", {
    name: "evidencia_principal",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  evidenciaPrincipal: string | null;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.seguimientos
  )
  @JoinColumn([{ name: "area_padre_id", referencedColumnName: "id" }])
  areaPadre: ResponsableUnit;

  @ManyToOne(
    () => ResponsableUnit,
    (responsableUnit) => responsableUnit.seguimientos2
  )
  @JoinColumn([{ name: "area_turnada_id", referencedColumnName: "id" }])
  areaTurnada: ResponsableUnit;

  @ManyToOne(
    () => CorrespondenciaEntrante,
    (correspondenciaEntrante) => correspondenciaEntrante.seguimientos
  )
  @JoinColumn([{ name: "correspondencia_id", referencedColumnName: "id" }])
  correspondencia: CorrespondenciaEntrante;

  @ManyToOne(
    () => AtencionEstado,
    (atencionEstado) => atencionEstado.seguimientos
  )
  @JoinColumn([{ name: "estatus_id", referencedColumnName: "id" }])
  estatus: AtencionEstado;

  @ManyToOne(() => User, (user) => user.seguimientos)
  @JoinColumn([{ name: "usuario_creo_id", referencedColumnName: "id" }])
  usuarioCreo: User;

  @ManyToOne(() => User, (user) => user.seguimientos2)
  @JoinColumn([{ name: "usuario_modifico_id", referencedColumnName: "id" }])
  usuarioModifico: User;
}
