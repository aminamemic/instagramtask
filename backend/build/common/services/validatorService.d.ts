export declare class ValidatorService {
    static validateString(value: string, fieldName: string): void;
    static validateBoolean(value: boolean, fieldName: string): void;
    static validateLength(length: number, max: number, name?: string): void;
    static validateObject(object: any, objectName?: string): void;
}
