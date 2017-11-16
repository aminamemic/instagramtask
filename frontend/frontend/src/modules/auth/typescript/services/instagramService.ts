import {Injectable} from '@angular/core';
import{IResponseCallback} from "../../../core/typescript/abstract/response.interface";
import {IHttpConfig} from "../../../core/typescript/abstract/request.interface";
import {AuthHttpConfig} from "../../../core/typescript/config/auth_http.config";
import {RestService} from "../../../core/typescript/services/rest.service";
import {IUser} from "../abstract/user.interface";


@Injectable ()

export class InstagramService {

    constructor(private restService: RestService) {

    }

    getDataFromInstagram(responseCallback: IResponseCallback): void {
        let httpData: IHttpConfig = AuthHttpConfig.getDataFromInstagram;
        this.restService.sendRequest(httpData, responseCallback);
    }

}


