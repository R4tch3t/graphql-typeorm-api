import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import fs from 'fs';
import https from 'https';
import http from 'http';
import {ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import jwt from 'express-jwt';
import bodyParser from 'body-parser'
import {graphqlUploadExpress} from 'graphql-upload';
import path from 'path';
import schemas from './schemas/schemas'

export async function startServer(){
    const app = express();
    const schema = await schemas();
    const configurations: {[index: string]:any} = {
      // Note: You may need sudo to run on port 443 
      production: { ssl: true, port: 443, hostname: 'localhost' },
      development: { ssl: true, port: 3000, hostname: 'localhost' },
    }; 
    const environment = process.env.NODE_ENV || 'development';
    const config = configurations[environment];

    const server = new ApolloServer({
        schema,
       // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: ({req, res}) => ({req, res})
    });
    await server.start()
    app.use(graphqlUploadExpress());
   // app.use('*',bodyParser.json(),auth)
    server.applyMiddleware({app, path: '/graphql'});

    app.use(express.static(path.join(__dirname, 'front-end')));

    app.use("/",express.static(path.join(__dirname, 'fron-end')));
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
    });

    let httpServer: any;
    if (config.ssl) {
      // Assumes certificates are in a .ssl folder off of the package root.
      // Make sure these files are secured.
      httpServer = https.createServer(
        {
          key: fs.readFileSync(path.join(__dirname,`ssl/${environment}/server.key`)),
          cert: fs.readFileSync(path.join(__dirname,`ssl/${environment}/server.crt`))
        },

        app,
      );
    } else {
      httpServer = http.createServer(app);
    }

    await new Promise<void>(resolve =>
      httpServer.listen({ port: config.port }, resolve)
    );
    
    console.log(
      '🚀 Server ready at',
      `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
        server.graphqlPath
      }`
    );

    //return app;
}