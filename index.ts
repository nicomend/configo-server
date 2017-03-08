import * as express from 'express';
import * as mongodb from 'mongodb';
import * as cors from 'cors';
import {initializeGraphQL} from "./initialize-graphql";
import {initializeDatabase} from "./initialize-database";
import {Logger} from "./logger";
const MongoClient = mongodb.MongoClient;

const DB_PATH = process.env['db'] || 'mongodb://nicom:wG5-z8S-eWv-eUd@ds113650.mlab.com:13650/configo';
const PORT = process.env['port'] || 3000;

Logger.info('Configo is running');
Logger.info(`Trying to connect to db: ${DB_PATH}`);
initializeDatabase(DB_PATH).then(() => {
    Logger.info('Successfully connected to db');
    const app = express();
    app.use(cors());
    initializeGraphQL(app);
    app.listen(PORT, () => {
        Logger.info(`Everything is ok, running on port: ${PORT}`)
    });
}).catch((error) => {
    Logger.error(`Failed to connect to db, reason: ${error}`);
});
