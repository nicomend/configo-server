import {makeExecutableSchema} from "graphql-tools";
import {resolveFunctions} from "./data/resolvers";
import Schema from './data/schema.js';
import bodyParser = require("body-parser");
import {graphqlExpress, graphiqlExpress} from "graphql-server-express";
import * as express from 'express';
import {Logger, loggerMiddleware} from "./logger";

export function initializeGraphQL(app: express.Application) {
    const executableSchema = makeExecutableSchema({
        typeDefs: Schema,
        resolvers: resolveFunctions,
        logger: {
            log: (message:string)=>{
                Logger.info(message);
            }
        }
    });

    app.use('/graphql', bodyParser.json(), loggerMiddleware, graphqlExpress({schema: executableSchema}));
    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql',
    }));
}