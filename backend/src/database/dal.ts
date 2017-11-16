import {Logger} from "log4js";
import {Document, Schema, Model, model} from "mongoose";
import {Utils} from "../common/util/Utils";
import {IOptions} from "../common/services/restService";

export class Dal {

    log: Logger;

    constructor() {
        this.log = Utils.getLogger("Dal");
    }

    createDocument<T extends Document>(model: Model<T>, data: any, errorCb: (err: any) => void, successCb: () => void) {
        model.create(data, (err) => {
            err ? errorCb(err) : successCb();
        });
    }

    findDocumentById<T extends Document>(model: Model<T>, id: string, errorCb: (err: any) => void, successCb: (data: any) => void) {
        model.findById(id, (err: any, data: any) => {
            err ? errorCb(err) : successCb(data);
        });
    }

    findOneDocument<T extends Document>(model: Model<T>, query: any, errorCb: (err: any) => void, successCb: (data: any) => void) {
        model.findOne(query, (err: any, data: any) => {
            err ? errorCb(err) : successCb(data);
        });
    }

    findAllDocuments<T extends Document>(model: Model<T>, errorCb: (err: any) => void, successCb: (data: any) => void) {
        model.find({}, (err: any, data: any) => {
            err ? errorCb(err) : successCb(data);
        });
    }

    updateDocumentById<T extends Document>(model: Model<T>, id: string, data: any, errorCb: (err: any) => void, successCb: () => void) {
        model.findByIdAndUpdate(id, data, (err: any) => {
            err ? errorCb(err) : successCb();
        });
    }

    updateDocumentByFilter<T extends Document>(model: Model<T>, filter: any, data: any, errorCb: (err: any) => void, successCb: () => void) {
        model.findOneAndUpdate(filter, data, (err: any) => {
            err ? errorCb(err) : successCb();
        });
    }

    removeDocumentById<T extends Document>(model: Model<T>, id: string, errorCb: (err: any) => void, successCb: () => void) {
        model.findByIdAndRemove(id, (err: any) => {
            err ? errorCb(err) : successCb();
        });
    }

    removeDocuments<T extends Document>(model: Model<T>, filter: any, errorCb: (err: any) => void, successCb: () => void) {
        model.remove(filter, (err: any) => {
            err ? errorCb(err) : successCb();
        });
    }

    searchDocuments<T extends Document>(model: Model<T>, filter: any, errorCb: (err: any) => void, successCb: (data: any) => void, options?: IOptions) {
        let query = model.find(filter);
        query.skip(Utils.isNumber(options.skip) ? options.skip : 0)
             .limit(Utils.isNumber(options.limit) ? options.limit : 1000)
             .exec((err: any, data: any[]) => {
               err ? errorCb(err) : successCb(data);
            });
    }

    countDocuments<T extends Document>(model: Model<T>, filter: any, errorCb: (err: any) => void, successCb: (count: number) => void) {
        model.count(filter, (err: any, data: any) => {
            err ? errorCb(err) : successCb(data);
        });

    }


}


