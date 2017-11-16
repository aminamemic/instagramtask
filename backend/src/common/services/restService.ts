import {API_DEFINITIONS} from "./definitions/definition";
import {Utils} from "../util/Utils";
import {Constants} from "../constants/constants";
import {Cryptography} from "../util/Cryptography";
import {IPublicDetails} from "../../database/model/users/users";

export interface ISearchRequest{
    query: string;
    options?: IOptions
}

export interface IOptions {
    skip?: number;
    limit?: number;
}

export interface ISearchResponse{
   searchResults?: Array<any>;
   totalCount?: number;
}

export class ResponseData {
    time: number = Utils.getTime();
    constructor(public code: number, public message: string, public data?: any) {}
}

export class RestService{

    constructor(){

    }

    static generateRoute(apiName: string, action: string){
        for (let i = 0, len = API_DEFINITIONS.length; i < len; i++) {
            if(API_DEFINITIONS[i].name === apiName){
                for (let j = 0, len = API_DEFINITIONS[i].actions.length; j < len; j++) {
                    if(API_DEFINITIONS[i].actions[j].action === action){
                        return Utils.getFullPath(API_DEFINITIONS[i].basePath + "/" +  API_DEFINITIONS[i].actions[j].path)
                    }
                }
            }

        }
    }

    static sendResponse(response: any, status: number, message?: string, data?: any){
        let responseData: ResponseData = new ResponseData(status, message, data);
        response.writeHead(status, {"Content-Type": Constants.HEADERS.JSON});
        response.end(JSON.stringify(
           responseData
        ));

    }

    static sendAuthResponse(response: any, status: number, message: string, token: string, userData: IPublicDetails){
        let responseData: ResponseData = new ResponseData(status, message, userData);
        response.set(Constants.HEADERS.AUTH, token);
        response.writeHead(status, {"Content-Type": Constants.HEADERS.JSON});
        response.end(JSON.stringify(
            responseData
        ));

    }

    static getBody(request: any) {
        if (Utils.notNull(request.body)) {
            return request.body;
        }
        else {
            throw new Error("Body not provided");
        }
    }

    static getPathId(request: any): string {
        if (Utils.notNull(request.params.id)) {
            return request.params.id;
        }
        else {
            throw new Error("Path id not provided");
        }
    }


    static getAuthHeader(request: any): string {
        return request.get(Constants.HEADERS.AUTH);
    }

    static getInstagramCode(request: any): string{
        return request.query.code;
    }

    static validateJWT(token: string, errorCb: (err: any) => void, successCb: (decodedToken: any) => void){
        if(!token){
            errorCb(new Error("JWT token not exist in header user-auth"));
        }
        else{
            Cryptography.verifyJWT(token, errorCb, successCb);
        }
    }

}
