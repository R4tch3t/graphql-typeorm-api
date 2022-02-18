import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import {ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import jwt from 'express-jwt';
import bodyParser from 'body-parser'
import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/ping';
import { ProductResolver } from './resolvers/ProductResolver';
import { AuthorResolver } from './resolvers/AuthorResolver';
import { BookResolver } from './resolvers/BookResolver';
import { UserResolver } from './resolvers/UserResolver';
import { TramiteResolver } from './resolvers/TramiteResolver';
import { DownFormatResolver } from './resolvers/DownFormatResolver';
import { AttModuleResolver } from './resolvers/AttModuleResolver';
import { RequirementResolver } from './resolvers/RequirementResolver';
import { ReqAdResolver } from './resolvers/ReqAdResolver';
import { TramitePreguntaResolver } from './resolvers/TramitePreguntaResolver';
import { FileResolver } from './resolvers/FileResolver';
import {graphqlUploadExpress} from 'graphql-upload';
import path from 'path';

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
            resolvers: [PingResolver, ProductResolver, AuthorResolver, BookResolver, UserResolver, TramiteResolver,DownFormatResolver,
              AttModuleResolver, RequirementResolver, ReqAdResolver, TramitePreguntaResolver],
            validate: false

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
    app.use(graphqlUploadExpress());
   // app.use('*',bodyParser.json(),auth)
    server.applyMiddleware({app, path: '/graphql'})

    app.use(express.static(path.join(__dirname, 'front-end')));
    app.use("/",express.static(path.join(__dirname, 'fron-end')));
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
    });

    return app;
}