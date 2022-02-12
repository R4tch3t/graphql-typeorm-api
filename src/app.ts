import express from 'express';
import {ApolloServer} from 'apollo-server-express';
//import jwt from 'express-jwt';
import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/ping';
import { ProductResolver } from './resolvers/ProductResolver';
import { AuthorResolver } from './resolvers/AuthorResolver';
import { BookResolver } from './resolvers/BookResolver';
import { UserResolver } from './resolvers/UserResolver';
import { TramiteResolver } from './resolvers/TramiteResolver';

export async function startServer(){
    /*const jwt = require('express-jwt')
    const auth = jwt({
        secret: process.env.JWT_SECRET!,
        credentialsRequired: false
      })*/
    const app = express();
   // app.use(auth)
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, ProductResolver, AuthorResolver, BookResolver, UserResolver, TramiteResolver],
            validate: false
        }),
        context: ({req, res}) => ({req, res})
    });
    await server.start()
    server.applyMiddleware({app, path: '/graphql'})
    
    return app;
}