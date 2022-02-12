import { 
    Entity, 
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    PrimaryColumn,
    CreateDateColumn, 
    BeforeInsert,
    getManager
     } from "typeorm";
import {Field, Int, ObjectType} from 'type-graphql'

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

    // @BeforeInsert()
    // async beforeInsert(): Promise<void>{
    //   const res = await getManager().query("select XE.USER_SEQ.nextval ID from dual");
    //   this.id= res[0].ID;
    // }

}


