import {Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql";
import { Tramite } from '../entity/Tramite';

@Resolver()
export class TramiteResolver {
    

    @Query(()=>[Tramite])
    tramites(){
        return Tramite.find({active: true})
    }
}