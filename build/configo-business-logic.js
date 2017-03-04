"use strict";
const mongoose = require("mongoose");
const logger_1 = require("./logger");
const configoSchema = new mongoose.Schema({
    appName: String,
    config: Object
});
const Configo = mongoose.model('Configo', configoSchema);
class ConfigoBussinessLogic {
    static createConfig(appName, config) {
        return new Promise((resolve, reject) => {
            const newConfig = new Configo({ appName: appName, config: config });
            newConfig.save((error, config) => {
                if (error) {
                    logger_1.Logger.error(`Config creation failed, reason: ${error}`);
                    reject(error);
                }
                logger_1.Logger.info('Config created successfully');
                resolve(config);
            });
        });
    }
    static getConfig(id) {
        return new Promise((resolve, reject) => {
            Configo.findById(id, (error, config) => {
                if (error) {
                    logger_1.Logger.error(`Cannot get config, reason: ${error}`);
                    reject(error);
                }
                resolve([config]);
            });
        });
    }
    static getAllConfigs() {
        return new Promise((resolve, reject) => {
            Configo.find((error, configs) => {
                if (error) {
                    logger_1.Logger.error(`Cannot get config, reason: ${error}`);
                    reject(error);
                }
                resolve(configs);
            });
        });
    }
    static updateConfig(id, config) {
        return new Promise((resolve, reject) => {
            Configo.findByIdAndUpdate(id, { config: config }, (error, config) => {
                if (error) {
                    logger_1.Logger.error(`Cannot update config, reason: ${error}`);
                    reject(error);
                }
                logger_1.Logger.info(`Config ${id.toString()} updated successfully`);
                resolve(config);
            });
        });
    }
    static deleteConfig(id) {
        return new Promise((resolve, reject) => {
            Configo.findByIdAndRemove(id, (error, config) => {
                if (error) {
                    logger_1.Logger.error(`Cannot update config, reason: ${error}`);
                    reject(error);
                }
                logger_1.Logger.info(`Config ${id.toString()} removed successfully`);
                resolve(config);
            });
        });
    }
}
exports.ConfigoBussinessLogic = ConfigoBussinessLogic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnby1idXNpbmVzcy1sb2dpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ28tYnVzaW5lc3MtbG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUFxQztBQUdyQyxxQ0FBZ0M7QUFFaEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3RDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsTUFBTSxFQUFFLE1BQU07Q0FDakIsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFekQ7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQWUsRUFBRSxNQUFXO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU07Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsZUFBTSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDekQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUVELGVBQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxN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