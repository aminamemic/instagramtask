import * as express from 'express';
import {Express} from "express";
import {AbstractMicroservice} from "../../common/services/microservice.abstract";
import {Environments} from "../../common/environments/environments_LOCAL";
import {Constants} from "../../common/constants/constants";
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import * as cors from 'cors';
import {AuthRoutes} from "./routes/authRoutes";
import {UsersRoutes} from "./routes/usersRoutes";



export class UsersMicroservice extends AbstractMicroservice{

    constructor(){
        super(Environments.users, express());
        this.publishRoutes(new AuthRoutes(this.app));
        this.publishRoutes(new UsersRoutes(this.app));
    }

    configureExpress(app: Express): void {
        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.json({type: 'application/vnd.api+json'}));
        app.use(bodyParser.raw({
            inflate: true,
            limit: '50mb',
            type: 'application/pdf'
        }));
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.raw({type: 'multipart/form-data*'}));
        app.use(methodOverride('X-HTTP-Method-Override'));
        app.use(morgan('dev'));
        app.use(cors(<any>{
            origin: true,
            credentials: true,
            exposedHeaders: [Constants.HEADERS.AUTH],
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            optionsSuccessStatus: 204
        }));
        app.use(cors({ exposedHeaders: [Constants.HEADERS.AUTH]}));
    }
}
