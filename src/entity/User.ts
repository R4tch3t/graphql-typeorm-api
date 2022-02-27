import { 
    Entity, 
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn, 
     } from "typeorm";
import {Field, ObjectType} from 'type-graphql'

@ObjectType()
@Entity('usuarios')
export class User extends BaseEntity {
    
    @Field({ nullable: true })
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


