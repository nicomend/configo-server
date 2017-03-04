"use strict";
const configo_business_logic_1 = require("../configo-business-logic");
const mongodb_1 = require("mongodb");
const GraphQLJSON = require('graphql-type-json');
exports.resolveFunctions = {
    JSON: GraphQLJSON,
    Query: {
        configo(obj, { id }) {
            return id ? configo_business_logic_1.ConfigoBussinessLogic.getConfig(new mongodb_1.ObjectID(id)) : configo_business_logic_1.ConfigoBussinessLogic.getAllConfigs();
        },
    },
    Mutation: {
        updateConfig(obj, { id, config }) {
            return configo_business_logic_1.ConfigoBussinessLogic.updateConfig(new mongodb_1.ObjectID(id), config);
        },
        createConfig(obj, { appName, config }) {
            return configo_business_logic_1.ConfigoBussinessLogic.createConfig(appName, config);
        },
        deleteConfig(obj, { id }) {
            return configo_business_logic_1.ConfigoBussinessLogic.deleteConfig(new mongodb_1.ObjectID(id));
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGF0YS9yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNFQUFnRTtBQUNoRSxxQ0FBaUM7QUFDakMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFcEMsUUFBQSxnQkFBZ0IsR0FBRztJQUM1QixJQUFJLEVBQUUsV0FBVztJQUNqQixLQUFLLEVBQUU7UUFDSCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBRSxFQUFDO1lBQ2IsTUFBTSxDQUFDLEVBQUUsR0FBRyw4Q0FBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsOENBQXFCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUcsQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUM7WUFDMUIsTUFBTSxDQUFDLDhDQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLGtCQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUNELFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO1lBQy9CLE1BQU0sQ0FBQyw4Q0FBcUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUMsRUFBRSxFQUFDO1lBQ2xCLE1BQU0sQ0FBQyw4Q0FBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztLQUNKO0NBQ0osQ0FBQyJ9