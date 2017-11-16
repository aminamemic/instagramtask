import { Express } from "express";
import { AbstractMicroservice } from "../../common/services/microservice.abstract";
export declare class UsersMicroservice extends AbstractMicroservice {
    constructor();
    configureExpress(app: Express): void;
}
