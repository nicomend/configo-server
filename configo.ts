import {ObjectID} from "mongodb";
export interface IConfigo {
    _id: ObjectID;
    appName: string;
    config: any;
}
