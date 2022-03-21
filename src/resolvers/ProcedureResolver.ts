import {Resolver, Query, Arg, Int } from "type-graphql";
import { Like } from "typeorm";
import { Procedure } from '../entities/Procedure';

@Resolver()
export class ProcedureResolver {
    
    @Query(()=>Procedure)
    procedureById(
        @Arg("id",()=>Int) id: number
    ){
        const relations = [
            "attentionModules","costos",
            "downloadableFormats","fundamentoJuridicos",
            "otroRequisitos", "procedimientoPresencials",
            "procedimientoWebs", "responsableUnit","tipo",
            "requirements", "requisitoAdicionals",
            "tramitePreguntas"]
        const props = {where:{id}, active: true, relations}
        return Procedure.findOne(props)
    }

    @Query(()=>[Procedure])
    tramiteByName(
        @Arg("name",()=>String) name: string
    ){
        const relations = [
            "attentionModules","costos",
            "downloadableFormats","fundamentoJuridicos",
            "otroRequisitos", "procedimientoPresencials",
            "procedimientoWebs", "responsableUnit","tipo",
            "requirements", "requisitoAdicionals",
            "tramitePreguntas"]
        const props = {where: {name: Like(`%${name}%`)}, active: true, relations}
        return Procedure.find(props)
    }

    @Query(()=>[Procedure])
    tramites(){
        const relations = [
        "attentionModules","costos",
        "downloadableFormats","fundamentoJuridicos",
        "otroRequisitos", "procedimientoPresencials",
        "procedimientoWebs", "responsableUnit","tipo",
        "requirements", "requisitoAdicionals",
        "tramitePreguntas"]
        const props = {active: true, relations}
        return Procedure.find(props)
    }
}