import {Environment} from "../config/environment.interface";
import {Express} from "express";
import {IRoutes} from "./routes.interface";
import {Logger} from "log4js";
import {Utils} from "../util/Utils";

declare function require(moduleName: string): any;

export abstract class AbstractMicroservice {

    log: Logger;
    http: any;
    routes: Array<IRoutes>;

    constructor(public environment: Environment, public app: Express) {
        this.log = Utils.getLogger(this.environment.name);
        this.http = require('http').Server(app);
        this.routes = new Array<IRoutes>();
    }

    publishRoutes(routes: IRoutes) {
        this.routes.push(routes);
    }

    start(){
        Utils.conectToDB(this.environment.database, (err: any) => {
            err ?  this.log.error("Connection error: %s", JSON.stringify(err)) : this.log.info('Connection to MongoDB successfully established for environment: "' + this.environment.name + '"');
        });
        this.configureExpress(this.app);
        this.routes.forEach((routes: IRoutes, index: number) => {
            routes.defineRoutes();
            if(index === this.routes.length - 1){
                this.http.listen(this.environment.port, (err) => {
                    if (err) {
                        this.log.error(this.environment.name + " micro-service not started on port: " + this.environment.port + ": " + err);
                    } else {
                        this.log.info(this.environment.name + " micro-service successfully started on port: " + this.environment.port);
                    }
                });
            }
        });

    }

    abstract configureExpress(app: Express): void;

}