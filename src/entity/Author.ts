import { 
    Entity, 
    Column, 
    CreateDateColumn, 
    BaseEntity, 
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {Field, Int, ObjectType} from 'type-graphql'
import { Book } from "./Book";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    name!: string;

    @Field(() => String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string
    
    @Field(()=>[Book])
    @OneToMany(() => Book, book => book.author)
    books!: Book[];

}

