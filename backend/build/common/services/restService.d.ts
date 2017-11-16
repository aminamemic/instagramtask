import { IPublicDetails } from "../../database/model/users/users";
export interface ISearchRequest {
    query: string;
    options?: IOptions;
}
export interface IOptions {
    skip?: number;
    limit?: number;
}
export interface ISearchResponse {
    searchResults?: Array<any>;
    totalCount?: number;
}
export declare class ResponseData {
    code: number;
    message: string;
    data: any;
    time: number;
    constructor(code: number, message: string, data?: any);
}
export declare class RestService {
    constructor();
    static generateRoute(apiName: string, action: string): string;
    static sendResponse(response: any, status: number, message?: string, data?: any): void;
    static sendAuthResponse(response: any, status: number, message: string, token: string, userData: IPublicDetails): void;
    static getBody(request: any): any;
    static getPathId(request: any): string;
    static getAuthHeader(request: any): string;
    static getInstagramCode(request: any): string;
    static validateJWT(token: string, errorCb: (err: any) => void, successCb: (decodedToken: any) => void): void;
}
