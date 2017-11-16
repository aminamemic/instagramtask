import { IRoutes } from "../../../common/services/routes.interface";
import { Express } from "express";
import { AuthComponent } from "../components/authComponent";
export declare class AuthRoutes implements IRoutes {
    app: Express;
    authComponent: AuthComponent;
    constructor(app: Express);
    defineRoutes(): void;
}
