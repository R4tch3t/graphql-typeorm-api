import {Resolver, Query } from "type-graphql";
import { Requirement } from '../entity/Requirement';

@Resolver()
export class RequirementResolver {
    

    @Query(()=>[Requirement])
    requirements(){
        return Requirement.find({relations: ["procedure_"]})
    }
}