export declare class Cryptography {
    constructor();
    static hashPassword(password: string): string;
    static comparePassword(password: string, hash: string): boolean;
    static generateJWT(user: any): string;
    static verifyJWT(token: string, errorCb: (err: any) => void, successCb: (userId: string) => void): void;
}
