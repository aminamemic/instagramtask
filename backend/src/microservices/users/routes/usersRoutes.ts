import {IRoutes} from "../../../common/services/routes.interface";
import {Express} from "express";
import {RestService} from "../../../common/services/restService";
import {Api, UsersActions} from "../../../common/services/definitions/definition";
import {UsersComponent} from "../components/usersComponent";

export class UsersRoutes implements IRoutes{

    usersComponent: UsersComponent;

    constructor(public app: Express){
       this.usersComponent = new UsersComponent();
    }

    defineRoutes(): void {
        this.app.get(RestService.generateRoute(Api.USERS, UsersActions.getCode), this.usersComponent.getCode);
        this.app.get(RestService.generateRoute(Api.USERS, UsersActions.getUserProfile), this.usersComponent.getUserProfile);
        this.app.get(RestService.generateRoute(Api.USERS, UsersActions.getUserById), this.usersComponent.getUserById);
        this.app.post(RestService.generateRoute(Api.USERS, UsersActions.createUser), this.usersComponent.createUser);
        this.app.put(RestService.generateRoute(Api.USERS, UsersActions.updateUserById), this.usersComponent.updateUserById);
        this.app.delete(RestService.generateRoute(Api.USERS, UsersActions.deleteUserById), this.usersComponent.deleteUserById);
    }
}
