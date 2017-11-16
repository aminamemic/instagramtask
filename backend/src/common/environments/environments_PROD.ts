import {Environment} from "../config/environment.interface";

export class EnvironmentConfigurations {

    static users: Environment = {
        name: "Users",
        protocol: "http",
        host: "localhost",
        port: 700,
        database: 'mongodb://admin:admin@localhost:27017/users'

    };

}
