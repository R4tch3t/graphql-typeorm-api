import {Resolver, Query, Arg, Int } from "type-graphql";
import { Like } from "typeorm";
import { Tramite } from '../entity/Tramite';

@Resolver()
export class TramiteResolver {
    
    @Query(()=>Tramite)
    tramiteById(
        @Arg("id",()=>Int) id: number
    ){
        const relations = ["downloadableFormats","attModules","requirements","reqAds","tramitePreguntas"]
        const props = {where:{id}, active: true, relations}
        return Tramite.findOne(props)
    }

    @Query(()=>[Tramite])
    tramiteByName(
        @Arg("name",()=>String) name: string
    ){
        const relations = ["downloadableFormats","attModules","requirements","reqAds","tramitePreguntas"]
        const props = {where: {name: Like(`%${name}%`)}, active: true, relations}
        return Tramite.find(props)
    }

    @Query(()=>[Tramite])
    tramites(){
        const relations = ["downloadableFormats","attModules","requirements","reqAds","tramitePreguntas"]
        const props = {active: true, relations}
        return Tramite.find(props)
    }
}