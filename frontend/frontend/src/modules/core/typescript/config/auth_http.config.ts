import {IHttpConfig} from "../abstract/request.interface";

export class AuthHttpConfig {

    static login: IHttpConfig = {
        endpoint: 'AUTH',
        requestData: {
            path: 'login',
            method: 'POST',
            headers: [{headerKey: 'Content-Type', headerValue: 'application/json'}]
        },
        access: 'PUBLIC'
    };

    static createUser: IHttpConfig = {
        endpoint: 'USERS',
        requestData: {
            path: '',
            method: 'POST',
            headers: [{headerKey: 'Content-Type', headerValue: 'application/json'}],
        },
        access: 'PUBLIC'
    };

    static getDataFromInstagram: IHttpConfig = {
        endpoint: 'USERS',
        requestData: {
            path: 'profile',
            method: 'GET',
            headers: [{headerKey: 'Content-Type', headerValue: 'application/json'}]
        },
        access:'PRIVATE'
    }
}
