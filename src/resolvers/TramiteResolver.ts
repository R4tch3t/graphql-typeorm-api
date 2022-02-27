import {Resolver, Query } from "type-graphql";
import { Tramite } from '../entity/Tramite';

@Resolver()
export class TramiteResolver {
    

    @Query(()=>[Tramite])
    tramites(){
        const relations = ["downloadableFormats","attModules","requirements","reqAds","tramitePreguntas"]
        const props = {active: true, relations}
        return Tramite.find(props)
    }
}