"use strict";
const express = require("express");
const mongodb = require("mongodb");
const initialize_graphql_1 = require("./initialize-graphql");
const initialize_database_1 = require("./initialize-database");
const logger_1 = require("./logger");
const MongoClient = mongodb.MongoClient;
const DB_PATH = process.env['db'] || 'mongodb://nicom:wG5-z8S-eWv-eUd@ds113650.mlab.com:13650/configo';
const PORT = process.env['port'] || 3000;
logger_1.Logger.info('Configo is running');
logger_1.Logger.info(`Trying to connect to db: ${DB_PATH}`);
initialize_database_1.initializeDatabase(DB_PATH).then(() => {
    logger_1.Logger.info('Successfully connected to db');
    const app = express();
    initialize_graphql_1.initializeGraphQL(app);
    app.listen(PORT, () => {
        logger_1.Logger.info(`Everything is ok, running on port: ${PORT}`);
    });
}).catch((error) => {
    logger_1.Logger.error(`Failed to connect to db, reason: ${error}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyw2REFBdUQ7QUFDdkQsK0RBQXlEO0FBQ3pELHFDQUFnQztBQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBRXhDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksaUVBQWlFLENBQUM7QUFDdkcsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7QUFFekMsZUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLGVBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDbkQsd0NBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdCLGVBQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUM1QyxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUN0QixzQ0FBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNiLGVBQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLO0lBQ1gsZUFBTSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQyJ9