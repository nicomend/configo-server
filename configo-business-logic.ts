import * as mongoose from 'mongoose';
import {IConfigo} from "./configo";
import {ObjectID} from "mongodb";
import {Logger} from "./logger";

const configoSchema = new mongoose.Schema({
    appName: String,
    config: Object
});
const Configo = mongoose.model('Configo', configoSchema);

export class ConfigoBussinessLogic {
    static createConfig(appName: string, config: any): Promise<IConfigo> {
        return new Promise((resolve, reject) => {
            const newConfig = new Configo({appName: appName, config: config});
            newConfig.save((error, config) => {
                if (error) {
                    Logger.error(`Config creation failed, reason: ${error}`);
                    reject(error);
                }

                Logger.info('Config created successfully');
                resolve(config);
            });
        });
    }

    static getConfig(id: ObjectID): Promise<IConfigo> {
        return new Promise((resolve, reject) => {
            Configo.findById(id, (error, config) => {
                if (error) {
                    Logger.error(`Cannot get config, reason: ${error}`);
                    reject(error);
                }

                resolve([config]);
            });
        })
    }

    static getAllConfigs(): Promise<IConfigo[]> {
        return new Promise((resolve, reject) => {
            Configo.find((error, configs) => {
                if (error) {
                    Logger.error(`Cannot get config, reason: ${error}`);
                    reject(error);
                }

                resolve(configs);
            });
        })
    }

    static updateConfig(id: ObjectID, config: any): Promise<IConfigo> {
        return new Promise((resolve, reject) => {
            Configo.findByIdAndUpdate(id, {config: config}, (error, config) => {
                if (error) {
                    Logger.error(`Cannot update config, reason: ${error}`);
                    reject(error);
                }

                Logger.info(`Config ${id.toString()} updated successfully`);
                resolve(config);
            });
        });
    }

    static deleteConfig(id: ObjectID): Promise<IConfigo> {
        return new Promise((resolve, reject) => {
            Configo.findByIdAndRemove(id, (error, config) => {
                if (error) {
                    Logger.error(`Cannot update config, reason: ${error}`);
                    reject(error);
                }

                Logger.info(`Config ${id.toString()} removed successfully`);
                resolve(config);
            });
        });
    }
}
