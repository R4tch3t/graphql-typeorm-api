import { 
    Entity, 
    Column, 
    PrimaryColumn, 
    CreateDateColumn, 
    BaseEntity, 
    OneToMany,
    BeforeInsert,
    getManager 
} from "typeorm";
import {Field, Int, ObjectType} from 'type-graphql'
import { Book } from "./Book";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
    
    @Field({ nullable: true })
    @PrimaryColumn()
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

    @BeforeInsert()
    async beforeInsert(): Promise<void>{
      const res = await getManager().query("select XE.AUTHORS_SEQ.nextval ID from dual");
      this.id= res[0].ID;
    }

}

