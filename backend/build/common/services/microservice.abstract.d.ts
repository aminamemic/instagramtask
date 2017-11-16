import { Environment } from "../config/environment.interface";
import { Express } from "express";
import { IRoutes } from "./routes.interface";
import { Logger } from "log4js";
export declare abstract class AbstractMicroservice {
    environment: Environment;
    app: Express;
    log: Logger;
    http: any;
    routes: Array<IRoutes>;
    constructor(environment: Environment, app: Express);
    publishRoutes(routes: IRoutes): void;
    start(): void;
    abstract configureExpress(app: Express): void;
}
