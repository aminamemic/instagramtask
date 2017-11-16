import {Utils} from "../util/Utils";

export class ValidatorService {

    static validateString(value: string, fieldName: string) {
        if (!Utils.notEmpty(value)) {
            let message = fieldName + " is null or empty";
            throw new Error(message);
        }
    }

    //boolean value must be true
    static validateBoolean(value: boolean, fieldName: string){
        if(!value){
            let message = fieldName + " has invalid value";
            throw new Error(message);
        }
    }


    static validateLength(length: number, max: number, name: string = "String") {
        if (Utils.notNull(length) && Utils.notNull(max) && length > max) {
            let message = name + " size is: " + length + " but max is: " + max ;
            throw new Error(message);
        }
    }

    static validateObject(object: any, objectName: string = "Object") {
        if (!Utils.notNull(object)) {
            let message = objectName + " is null, empty or undefined";
            throw new Error(message);
        }
    }
}
