import {Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql";
import { Product } from "../entities/Product";

@InputType()
class ProductInput {
    @Field()
    name!: string
    @Field()
    quantity!: number
}

@InputType()
class ProductUpdateInput {

    @Field(()=>String, {nullable: true})
    name?: string;

    @Field(()=>Int, {nullable: true})
    quantity?: number;
}

@Resolver()
export class ProductResolver {
    
    @Mutation(()=> Product)
    async createProduct(
        @Arg("variables", () => ProductInput) variables: ProductInput
    ){
        const newProduct = Product.create(variables);
        console.log(newProduct);
        return await newProduct.save();
        
    }

    @Mutation(()=>Boolean)
    async deleteProduct(@Arg("id", () => Int) id: number){
        //console.log(id)
        await Product.delete(id)
        return true
    }

    @Mutation(()=>Boolean)
    async updateProduct (
        @Arg("id",()=>Int) id: number,
        @Arg("fields",()=>ProductUpdateInput) fields: ProductUpdateInput
    ){
        await Product.update({id}, fields)
        return true
    }

    @Query(()=>[Product])
    products(){
        return Product.find()
    }
}