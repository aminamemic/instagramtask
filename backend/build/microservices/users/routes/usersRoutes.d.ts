import { IRoutes } from "../../../common/services/routes.interface";
import { Express } from "express";
import { UsersComponent } from "../components/usersComponent";
export declare class UsersRoutes implements IRoutes {
    app: Express;
    usersComponent: UsersComponent;
    constructor(app: Express);
    defineRoutes(): void;
}
