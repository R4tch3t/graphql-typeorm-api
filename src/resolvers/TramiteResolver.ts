import {Resolver, Query } from "type-graphql";
import { Tramite } from '../entity/Tramite';

@Resolver()
export class TramiteResolver {
    

    @Query(()=>[Tramite])
    tramites(){
        const props = {active: true, relations: ["downloadableFormats","attModules","requirements","reqAds","tramitePreguntas"]}
        return Tramite.find(props)
    }
}