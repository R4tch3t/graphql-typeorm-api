import {Resolver, Query, Mutation, Arg, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column } from "typeorm";
import { Author } from "../entity/Author";
import { Book } from "../entity/Book";

@InputType()
class BooksAuthor{
    @Field(()=>Int,{nullable: true})
    id!: number
    @Field()
    title!: string
    @Field()
    quantity!: number
    //@Column()
    //author!: Author
}

@InputType()
class AuthorInput {

    @Field()
    name!: string
    @Column()
    books!: Book[]
}

@InputType()
class AuthorUpdateInput {
    
    @Field(()=>String, {nullable: true})
    name?: string;

}

@Resolver()
export class AuthorResolver {
    
    @Mutation(()=> Author)
    async createAuthor(
        @Arg("author", () => AuthorInput) author: AuthorInput,
        @Arg("booksAuthor", () => [BooksAuthor]) booksAuthor: [BooksAuthor]
    ){
        let newAuthor = await Author.findOne({where:{name: author.name},relations: ["books"]})
        if(!newAuthor){
            newAuthor = Author.create(author);
            newAuthor.books=[] 
        }
        
        let newBooks: Book[] = Book.create(booksAuthor);

        await Book.upsert(newBooks,["id"]) 
        /*booksAuthor.map(async (v, i) => {
            let newBook = await Book.findOne({ where: { title: v.title } });
            //const newAuthor = Author.create(author);
            if (!newBook) {
                newBook = new Book();
                newBook.title = v.title;
                //newBook.author = newAuthor! 
                newBook.quantity = v.quantity;
                newBooks.push(newBook);
                await newBook.save();
                
            }
        })*/  
        //console.log(newBooks)
        console.log(author) 
        console.log(newAuthor)
        newAuthor.books=newAuthor.books.concat(newBooks)
        console.log(newAuthor) 
        return await newAuthor.save();
    }

    @Mutation(()=>Boolean)
    async deleteAuthor(@Arg("id", () => Int) id: number){
        //console.log(id)
        await Author.delete(id)
        return true
    } 

    @Mutation(()=>Boolean)
    async updateAuthor (
        @Arg("id",()=>Int) id: number,
        @Arg("fields",()=>AuthorUpdateInput) fields: AuthorUpdateInput
    ){
        await Author.update({id}, fields)
        return true
    }

    @Query(()=>[Author])
    authors(){
        return Author.find({ relations: ["books"] })
    }
}