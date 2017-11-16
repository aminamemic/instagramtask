import {ENVIRONMENTS} from "./environment";
import {IEndPoints} from "../abstract/endpoints.interface";

export const EndPoints: IEndPoints = {
    AUTH: {
        protocol: ENVIRONMENTS.USERS.PROTOCOL,
        host: ENVIRONMENTS.USERS.IP,
        port: ENVIRONMENTS.USERS.PORT,
        path: '/api/v1/auth'
    },
    USERS: {
        protocol: ENVIRONMENTS.USERS.PROTOCOL,
        host: ENVIRONMENTS.USERS.IP,
        port: ENVIRONMENTS.USERS.PORT,
        path: '/api/v1/users'
    }

};

