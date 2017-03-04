import * as winston from 'winston';
import * as express from 'express';
import {ObjectID} from "mongodb";

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console()
    ]
});

export class Logger {
    static info(message) {
        logger.info(message);
    }

    static debug(message) {
        logger.debug(message);
    }

    static error(message) {
        logger.error(message);
    }
}

export function loggerMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    const requestId = ObjectID.createFromTime(new Date().getTime()).toString();
    Logger.info(`Request from: ${req.connection.remoteAddress}, URL: ${req.url}, RequestID: ${requestId}`);
    next();
}