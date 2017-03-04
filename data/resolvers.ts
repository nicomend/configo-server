import {ConfigoBussinessLogic} from "../configo-business-logic";
import {ObjectID} from "mongodb";
const GraphQLJSON = require('graphql-type-json');

export const resolveFunctions = {
    JSON: GraphQLJSON,
    Query: {
        configo(obj, {id}) {
            return id ? ConfigoBussinessLogic.getConfig(new ObjectID(id)) : ConfigoBussinessLogic.getAllConfigs();
        },
    },
    Mutation: {
        updateConfig(obj, {id, config}) {
            return ConfigoBussinessLogic.updateConfig(new ObjectID(id), config);
        },
        createConfig(obj, {appName, config}) {
            return ConfigoBussinessLogic.createConfig(appName, config);
        },
        deleteConfig(obj, {id}){
            return ConfigoBussinessLogic.deleteConfig(new ObjectID(id));
        }
    }
};