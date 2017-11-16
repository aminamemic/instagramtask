export declare class Api {
    static AUTH: string;
    static USERS: string;
}
export declare class ApiMethods {
    static ANY: string;
    static POST: string;
    static GET: string;
    static PUT: string;
    static DELETE: string;
}
export interface ApiDefinition {
    name: string;
    basePath: string;
    actions: Array<ApiAction>;
}
export interface ApiAction {
    action: string;
    method: string;
    path: string;
}
export declare class AuthActions {
    static login: string;
    static logout: string;
}
export declare class UsersActions {
    static getUserById: string;
    static searchUsers: string;
    static createUser: string;
    static updateUserById: string;
    static deleteUserById: string;
    static getCode: string;
    static getUserProfile: string;
}
export declare const API_DEFINITIONS: Array<ApiDefinition>;
export declare class ResponseMessages {
    static SUCCESS: string;
    static ERROR: string;
    static USER_NOT_EXIST: string;
    static WRONG_PASSWORD: string;
    static LOGIN_SUCCESS: string;
    static FORBIDDEN: string;
}
