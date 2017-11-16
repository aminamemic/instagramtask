import {Environment} from "../config/environment.interface";

export class Environments {

    static users: Environment = {
        name: "Users",
        protocol: "http",
        host: "localhost",
        port: 700,
        database: 'mongodb://userAdmin:amina@localhost:27017/users',
        logLevel: 'DEBUG'

    };

}
