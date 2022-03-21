import {Resolver, Query, Arg, Int } from "type-graphql";
import { Like } from "typeorm";
import { Procedure } from '../entities/Procedure';

@Resolver()
export class ProcedureResolver {
    relations = [
        "attentionModules","costos",
        "downloadableFormats","fundamentoJuridicos",
        "otroRequisitos", "procedimientoPresencials",
        "procedimientoWebs", "responsableUnit","tipo",
        "requirements", "requisitoAdicionals",
        "tramitePreguntas"]
    props:any = {active: true, relations: this.relations}
    @Query(()=>Procedure)
    tramiteById(
        @Arg("id",()=>Int) id: number
    ){
        this.props.where={id}
        return Procedure.findOne(this.props)
    }

    @Query(()=>[Procedure])
    tramiteByName(
        @Arg("name",()=>String) name: string
    ){
        
        //const props = {where: {name: Like(`%${name}%`)}, active: true, relations}
        this.props.where={name: Like(`%${name}%`)}
        return Procedure.find(this.props)
    }

    @Query(()=>[Procedure])
    tramites(){
        
        //const props = {active: true, relations}
        this.props.where=null;
        return Procedure.find(this.props)
    }
}