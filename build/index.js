"use strict";
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
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
    app.use(cors());
    initialize_graphql_1.initializeGraphQL(app);
    app.listen(PORT, () => {
        logger_1.Logger.info(`Everything is ok, running on port: ${PORT}`);
    });
}).catch((error) => {
    logger_1.Logger.error(`Failed to connect to db, reason: ${error}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsNkRBQXVEO0FBQ3ZELCtEQUF5RDtBQUN6RCxxQ0FBZ0M7QUFDaEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUV4QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGlFQUFpRSxDQUFDO0FBQ3ZHLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO0FBRXpDLGVBQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsQyxlQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELHdDQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QixlQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDNUMsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLHNDQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2IsZUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUs7SUFDWCxlQUFNLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDIn0=