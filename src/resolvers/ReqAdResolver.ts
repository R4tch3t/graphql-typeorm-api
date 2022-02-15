import {Resolver, Query} from "type-graphql";
import { ReqAd } from '../entity/ReqAd';

@Resolver()
export class ReqAdResolver {
    

    @Query(()=>[ReqAd])
    requisitosAds(){
        return ReqAd.find({relations: ["procedure_"]})
    }
}