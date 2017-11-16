import { Logger } from "log4js";
import { Document, Model } from "mongoose";
import { IOptions } from "../common/services/restService";
export declare class Dal {
    log: Logger;
    constructor();
    createDocument<T extends Document>(model: Model<T>, data: any, errorCb: (err: any) => void, successCb: () => void): void;
    findDocumentById<T extends Document>(model: Model<T>, id: string, errorCb: (err: any) => void, successCb: (data: any) => void): void;
    findOneDocument<T extends Document>(model: Model<T>, query: any, errorCb: (err: any) => void, successCb: (data: any) => void): void;
    findAllDocuments<T extends Document>(model: Model<T>, errorCb: (err: any) => void, successCb: (data: any) => void): void;
    updateDocumentById<T extends Document>(model: Model<T>, id: string, data: any, errorCb: (err: any) => void, successCb: () => void): void;
    updateDocumentByFilter<T extends Document>(model: Model<T>, filter: any, data: any, errorCb: (err: any) => void, successCb: () => void): void;
    removeDocumentById<T extends Document>(model: Model<T>, id: string, errorCb: (err: any) => void, successCb: () => void): void;
    removeDocuments<T extends Document>(model: Model<T>, filter: any, errorCb: (err: any) => void, successCb: () => void): void;
    searchDocuments<T extends Document>(model: Model<T>, filter: any, errorCb: (err: any) => void, successCb: (data: any) => void, options?: IOptions): void;
    countDocuments<T extends Document>(model: Model<T>, filter: any, errorCb: (err: any) => void, successCb: (count: number) => void): void;
}
