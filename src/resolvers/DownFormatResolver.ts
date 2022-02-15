import {Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql";
import { DownloadableFormat } from '../entity/DownloadableFormat';

@Resolver()
export class DownFormatResolver {
    

    @Query(()=>[DownloadableFormat])
    downFormats(){
        return DownloadableFormat.find({relations: ["procedure_"]})
    }
}