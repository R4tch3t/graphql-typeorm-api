import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import {Field, Int, ObjectType} from 'type-graphql'
import { Author } from "./Author";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(()=>Author)
    //@Column("int", {default: 0})
    @ManyToOne(() => Author, author => author.books)
    author!: Author;

    @Field(() => String)
    @Column()
    title!: string;

    @Field(()=>Int)
    @Column("int", {default: 0})
    quantity!: number;

    @Field(() => String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string

}