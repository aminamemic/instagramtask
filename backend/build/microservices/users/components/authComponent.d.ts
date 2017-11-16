import { Logger } from "log4js";
export declare class AuthComponent {
    log: Logger;
    constructor();
    login(request: any, response: any): void;
    logout(request: any, response: any): void;
}
