import * as log4js from 'log4js';
import * as mongoose from 'mongoose';
import {Logger} from "log4js";
import {Environment} from "../config/environment.interface";
import {Constants} from "../constants/constants";


export class Utils {

    static getLogger(name: string): Logger {
        let logger = log4js.getLogger(name);
        logger.setLevel("DEBUG");
        return logger;
    }

    static generateBaseUrl(environment: Environment) {
        return environment.protocol + "://" + environment.host + ":" + environment.port;
    }

    static getFullPath(path: string): string {
        return Constants.SLASH + Constants.API + Constants.SLASH + Constants.VERSION + Constants.SLASH + path;
    }

    static getTime(): number {
        return Date.now();
    }

    static conectToDB(dbUrl: string, callback: (err: any) => void){
        (<any> mongoose).Promise = global.Promise;
        mongoose.connect(dbUrl, {}, callback);
    }

    static defined(value: any): boolean {
        return value !== undefined;
    }

    static isArray(value: any): boolean {
        return Utils.notNull(value) && Object.prototype.toString.call([]) === '[object Array]';
    }

    static notNull(value: any): boolean {
        return (this.defined(value) && value !== null);
    }


    static isNumber(value: any): boolean {
        return (this.notNull(value) && !isNaN(value));
    }

    static isNull(value: any): boolean {
        return !this.notNull(value);
    }

    static notEmpty(value: string): boolean {
        return (this.notNull(value) && value !== "");
    }

}
