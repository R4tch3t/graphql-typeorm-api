import { 
    Entity, 
    Column, 
    PrimaryColumn, 
    CreateDateColumn, 
    BaseEntity, 
    ManyToOne,
    BeforeInsert,
    getManager } 
    from "typeorm";
import {Field, Int, ObjectType} from 'type-graphql'
import { Author } from "./Author";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
    
    @Field({ nullable: true })
    @PrimaryColumn()
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

    @BeforeInsert()
    async beforeInsert(): Promise<void>{
      const res = await getManager().query("select XE.BOOKS_SEQ.nextval ID from dual");
      this.id= res[0].ID;
    }

}

