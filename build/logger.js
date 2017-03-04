"use strict";
const winston = require("winston");
const mongodb_1 = require("mongodb");
const logger = new winston.Logger({
    transports: [
        new winston.transports.Console()
    ]
});
class Logger {
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
exports.Logger = Logger;
function loggerMiddleware(req, res, next) {
    const requestId = mongodb_1.ObjectID.createFromTime(new Date().getTime()).toString();
    Logger.info(`Request from: ${req.connection.remoteAddress}, URL: ${req.url}, RequestID: ${requestId}`);
    next();
}
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBbUM7QUFFbkMscUNBQWlDO0FBRWpDLE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM5QixVQUFVLEVBQUU7UUFDUixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0tBQ25DO0NBQ0osQ0FBQyxDQUFDO0FBRUg7SUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87UUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1FBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBWkQsd0JBWUM7QUFFRCwwQkFBaUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ3BHLE1BQU0sU0FBUyxHQUFHLGtCQUFRLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsVUFBVSxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN2RyxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFKRCw0Q0FJQyJ9