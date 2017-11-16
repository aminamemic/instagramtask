import {IRoutes} from "../../../common/services/routes.interface";
import {Express} from "express";
import {RestService} from "../../../common/services/restService";
import {Api, AuthActions} from "../../../common/services/definitions/definition";
import {AuthComponent} from "../components/authComponent";

export class AuthRoutes implements IRoutes{

    authComponent: AuthComponent;

    constructor(public app: Express){
        this.authComponent = new AuthComponent();
    }

    defineRoutes(): void {
        this.app.post(RestService.generateRoute(Api.AUTH, AuthActions.login), this.authComponent.login);
        this.app.get(RestService.generateRoute(Api.AUTH, AuthActions.logout), this.authComponent.logout);
    }
}
