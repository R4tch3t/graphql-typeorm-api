import {Resolver, Query} from "type-graphql";
import { TramitePregunta } from '../entity/TramitePregunta';

@Resolver()
export class TramitePreguntaResolver {
    

    @Query(()=>[TramitePregunta])
    tramitePreguntas(){
        return TramitePregunta.find({relations: ["tramite_"]})
    }
}