import { Logger } from "log4js";
import { Environment } from "../config/environment.interface";
export declare class Utils {
    static getLogger(name: string): Logger;
    static generateBaseUrl(environment: Environment): string;
    static getFullPath(path: string): string;
    static getTime(): number;
    static conectToDB(dbUrl: string, callback: (err: any) => void): void;
    static defined(value: any): boolean;
    static isArray(value: any): boolean;
    static notNull(value: any): boolean;
    static isNumber(value: any): boolean;
    static isNull(value: any): boolean;
    static notEmpty(value: string): boolean;
}
