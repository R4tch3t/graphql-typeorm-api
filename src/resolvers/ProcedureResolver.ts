import {Resolver, Query, Arg, Int } from "type-graphql";
import { createQueryBuilder, Like } from "typeorm";
import { Procedure } from '../entities/Procedure';
import { ResponsableUnit } from '../entities/ResponsableUnit';
import { VwProcedure } from '../entities/VwProcedure';

@Resolver()
export class ProcedureResolver {
    relations = 
    [
        "attentionModules","costos",
        "downloadableFormats","fundamentoJuridicos",
        "otroRequisitos", "procedimientoPresencials",
        "procedimientoWebs", "responsableUnit","tipo",
        "requirements", "requisitoAdicionals",
        "tramitePreguntas"
    ]
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
        this.props.where={name: Like(`%${name}%`)}
        return Procedure.find(this.props)
    }

    @Query(()=>[Procedure])
    tramites(){
        this.props.where=null;
        return Procedure.find(this.props)
    }

    @Query(()=>[Procedure])
    procedureByUr(
        @Arg("responsableUnitId",()=>Int) responsableUnitId: number
    ){
        
        this.props.where={responsableUnitId}

        return Procedure.find(this.props)
    }

    @Query(()=>[ResponsableUnit])
    async proceduresByUr(){
        
        this.props.where=null
        this.props.ResponsableUnit = { 
            relations: [
                "procedures"
            ]
        }
        let totalTramites = 0
        //conteo de tramites 
        const r:ResponsableUnit[] = await ResponsableUnit.find(this.props.ResponsableUnit)
         r.map((v)=>{
            totalTramites = 0
            v.procedures.map((p)=>{
                totalTramites++;
                p.count = totalTramites
            })
            v.totalTramites=totalTramites
         });

        return r
    }

    // @Query( ()=>[VwProcedure])
    // async proceduresCountByUr(){
         
    //     this.props.where=null;
    //     return VwProcedure.find(this.props)
    // }

}