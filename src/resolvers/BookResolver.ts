import {Resolver, Query, Mutation, Arg, Field, InputType, Int, ObjectType, ArgsType, InterfaceType, createUnionType } from "type-graphql";
import { BaseEntity, Column, Entity, EntityRepository } from "typeorm";
import { Author } from "../entity/Author";
import { Book } from "../entity/Book";

@InputType()
class AuthorBook {
    @Field()
    id!: number
    @Field()
    name!: string
}

@InputType()
class BookInput {
    @Field()
    title!: string
    @Field()
    quantity!: number
    @Column()
    author!: Author
}

@InputType()
class BookUpdateInput {

    /*@Field(()=>Author, {nullable: true})
    author?: Author;*/
    
    @Field(()=>String, {nullable: true})
    title?: string;

    @Field(()=>Int, {nullable: true})
    quantity?: number;
}

@Resolver()
export class BookResolver {
    
    @Mutation(()=> Book)
    async createBook(
        @Arg("authorInput", () => AuthorBook) authorInput: AuthorBook,
        @Arg("book", () => BookInput) book: BookInput
    ){
       let author = await Author.findOne({where:{name: authorInput.name}})
       
       
        if(!author){
            author = new Author()
            author.name = authorInput.name
            //author = Author.create();
            author = await author.save();
        }
        
        const newBook = Book.create(book);
        newBook.author = author!
        console.log(newBook);
        return await newBook.save();
        
    }

    @Mutation(()=>Boolean)
    async deleteBook(@Arg("id", () => Int) id: number){
        //console.log(id)
        await Book.delete(id)
        return true
    }

    @Mutation(()=>Boolean)
    async updateBook (
        @Arg("id",()=>Int) id: number,
        @Arg("fields",()=>BookUpdateInput) fields: BookUpdateInput
    ){
        await Book.update({id}, fields)
        return true
    }

    @Query(()=>[Book])
    books(){
        return Book.find({ relations: ["author"] })
    }
}