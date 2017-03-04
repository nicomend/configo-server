"use strict";
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = require("./data/resolvers");
const schema_js_1 = require("./data/schema.js");
const bodyParser = require("body-parser");
const graphql_server_express_1 = require("graphql-server-express");
const logger_1 = require("./logger");
function initializeGraphQL(app) {
    const executableSchema = graphql_tools_1.makeExecutableSchema({
        typeDefs: schema_js_1.default,
        resolvers: resolvers_1.resolveFunctions,
        logger: {
            log: (message) => {
                logger_1.Logger.info(message);
            }
        }
    });
    app.use('/graphql', bodyParser.json(), logger_1.loggerMiddleware, graphql_server_express_1.graphqlExpress({ schema: executableSchema }));
    app.use('/graphiql', graphql_server_express_1.graphiqlExpress({
        endpointURL: '/graphql',
    }));
}
exports.initializeGraphQL = initializeGraphQL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZS1ncmFwaHFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaW5pdGlhbGl6ZS1ncmFwaHFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBbUQ7QUFDbkQsZ0RBQWtEO0FBQ2xELGdEQUFzQztBQUN0QywwQ0FBMkM7QUFDM0MsbUVBQXVFO0FBRXZFLHFDQUFrRDtBQUVsRCwyQkFBa0MsR0FBd0I7SUFDdEQsTUFBTSxnQkFBZ0IsR0FBRyxvQ0FBb0IsQ0FBQztRQUMxQyxRQUFRLEVBQUUsbUJBQU07UUFDaEIsU0FBUyxFQUFFLDRCQUFnQjtRQUMzQixNQUFNLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQyxPQUFjO2dCQUNoQixlQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLENBQUM7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSx5QkFBZ0IsRUFBRSx1Q0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHdDQUFlLENBQUM7UUFDakMsV0FBVyxFQUFFLFVBQVU7S0FDMUIsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDO0FBZkQsOENBZUMifQ==