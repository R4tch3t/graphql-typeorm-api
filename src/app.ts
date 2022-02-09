import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import jwt from 'express-jwt';
import bodyParser from 'body-parser'
import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/ping';
import { ProductResolver } from './resolvers/ProductResolver';
import { AuthorResolver } from './resolvers/AuthorResolver';
import { BookResolver } from './resolvers/BookResolver';
import { UserResolver } from './resolvers/UserResolver';
import http from 'http'

export async function startServer(){
    const app = express();
   /* const httpServer = http.createServer(app);
    const auth = jwt({
        secret: process.env.JWT_SECRET!,
        algorithms: ['sha1', 'RS256', 'HS256'],
        credentialsRequired: false
      })*/
      /*app.use('/api', bodyParser.json(), auth, ApolloServer(req => ({
        UserResolver,
        context: {
          user: req.user
        }
      }))
      )*/
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, ProductResolver, AuthorResolver, BookResolver, UserResolver]
        }),
       // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: ({req, res}) => {
          const token = req.headers.authorization || '';
          //const user = getUser(token);
         // console.log(token);
         // console.log(req.headers.data);
          return ({req, res}) 
        }//({req, res})
    });
    await server.start()
    
   // app.use('*',bodyParser.json(),auth)
    server.applyMiddleware({app, path: '/graphql'})
    
    return app;
}