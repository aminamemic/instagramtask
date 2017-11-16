import { Logger } from "log4js";
import { InstagramService } from "../services/instagramService";
export declare class UsersComponent {
    log: Logger;
    instagramService: InstagramService;
    constructor();
    getUserById(request: any, response: any): void;
    createUser(request: any, response: any): void;
    getCode(request: any, response: any): void;
    getUserProfile(request: any, response: any): void;
    updateUserById(request: any, response: any): void;
    deleteUserById(request: any, response: any): void;
}
