import {Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql";
import { Requirement } from '../entity/Requirement';

@Resolver()
export class RequirementResolver {
    

    @Query(()=>[Requirement])
    requirements(){
        return Requirement.find({relations: ["procedure_"]})
    }
}