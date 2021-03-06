import {Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql";
import { User } from "../entities/User";
import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcrypt"
@InputType()
class UserInput {
    @Field()
    id!: number
    @Field()
    username!: string
    @Field()
    email!: string
    @Field()
    pass!: string
}

@InputType()
class SignUp {
    @Field()
    id!: number
    @Field()
    username!: string
    @Field()
    email!: string
    @Field()
    password!: string
}

@InputType()
class Login {
    @Field()
    email!: string
    @Field()
    pass!: string
}

@InputType()
class UserUpdateInput {

    @Field(()=>String, {nullable: true})
    username?: string;

    @Field(()=>String, {nullable: true})
    email?: string;

}

@Resolver()
export class UserResolver {
    
    @Mutation(()=> User)
    async createUser(
        @Arg("variables", () => UserInput) variables: UserInput
    ){  
        
        const newUser = User.create(variables);
        return await newUser.save();
        
    }

    @Mutation(()=>Boolean)
    async deleteUser(@Arg("id", () => Int) id: number){
        await User.delete(id)
        return true
    }

    @Mutation(()=>Boolean)
    async updateUser (
        @Arg("id",()=>Int) id: number,
        @Arg("fields",()=>UserUpdateInput) fields: UserUpdateInput
    ){
        await User.update({id}, fields)
        return true
    }
    
    @Query(()=>User)
    async me(@Arg("token",()=>String) token: string){
        console.log(token)
        
        let user: any = jsonwebtoken.decode(token)
        
        if(!user){
            throw new Error("You are Not auth")
        }
        
        return await User.findOneOrFail(user.id)
    }

    @Mutation(()=>String)
    async signup (
        @Arg("signUp",()=>SignUp) signUp: SignUp
    ){
        console.log(signUp);
        signUp.password = await bcrypt.hash(signUp.password, 10)
        const user = await User.create(signUp).save()
        return jsonwebtoken.sign(
            { id: user.id, email: user.email },
            'process.env.JWT_SECRET!',
            { expiresIn: '1y' })
    }

    @Mutation(()=>String)
    async login (
        @Arg("logIn",()=>Login) logIn: Login
    ){
        const email = logIn.email
        const pass = logIn.pass
        
console.log('aqui paso bien', email, pass);

        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('No user with that email')
        }
        
        const valid = await bcrypt.compare(pass, user.password)

        if (!valid) {
            throw new Error('Incorrect password')
        }
        const token = jsonwebtoken.sign(
            { id: user.id, email: user.email },
            'process.env.JWT_SECRET!',
            { expiresIn: '1d' }
          );
          
        return token
    }

    @Query(()=>[User])
    users(){
        return User.find()
    }
}