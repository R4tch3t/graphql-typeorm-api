import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import {Field, Int, ObjectType} from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    username!: string;

    @Field(()=>String)
    @Column()
    email!: string;

    @Field(()=>String)
    @Column()
    pass!: string;

    @Field(() => String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string

}