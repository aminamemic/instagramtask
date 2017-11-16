import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from "./session.service";
import {RestService} from "./rest.service";
import {IResponseCallback} from "../abstract/response.interface";
import {IHttpConfig} from "../abstract/request.interface";
import {ILoginData, IForgotPasswordData, IChangePasswordData} from "../../../auth/typescript/abstract/auth.interface";
import {IAuthService} from "../abstract/i_auth.service";
import {AuthHttpConfig} from "../config/auth_http.config";
import {IUser, IPublicDetails} from "../../../auth/typescript/abstract/user.interface";


@Injectable()
export class AuthService implements IAuthService {

    constructor(private sessionService: SessionService, private restService: RestService, private router: Router) {
    }

    private redirectUrl: string;

    public setRedirectUrl(redirectUrl: string) {
        this.redirectUrl = redirectUrl;
    }

    public getRedirectUrl(): string {
         return this.redirectUrl;
    }

    createUser(user: any, responseCallback: IResponseCallback): void {
        let httpData: IHttpConfig = AuthHttpConfig.createUser;
        httpData.requestData.body = user;
        this.restService.sendRequest(httpData, responseCallback);
    }

    isLoggedIn(): boolean {
        return !this.sessionService.getSession() ? false : true;
    }

    login(loginData: ILoginData, responseCallback: IResponseCallback): void {
        let httpData: IHttpConfig = AuthHttpConfig.login;
        httpData.requestData.body = loginData;
        this.restService.sendRequest(httpData, responseCallback);
    }


    public logout() {
        if (this.sessionService.getSession()) {
            this.sessionService.deleteSession();
        }
        if (this.sessionService.getUserData()) {
            this.sessionService.deleteUserData();
        }
        this.router.navigate(['/login']);
    }

    generateUserModel():IUser{
        return {
            publicDetails: {},
            privateDetails: {}
        };
    }
}
