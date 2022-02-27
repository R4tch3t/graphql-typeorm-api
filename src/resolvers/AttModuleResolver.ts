import {Resolver, Query } from "type-graphql";
import { AttModule } from '../entity/AttModule';

@Resolver()
export class AttModuleResolver {
    

    @Query(()=>[AttModule])
    attModules(){
        return AttModule.find({relations: ["procedure_"]})
    }
}