import {Logger} from "log4js";
import {Utils} from "../../../common/util/Utils";
import {RestService} from "../../../common/services/restService";
import {ResponseMessages} from "../../../common/services/definitions/definition";
import {ValidatorService} from "../../../common/services/validatorService";
import {IUser} from "../../../database/model/users/users";
import {UsersService} from "../services/usersService";
import {InstagramService} from "../services/instagramService";

export class UsersComponent {

    log: Logger;
    instagramService: InstagramService;

    constructor() {
        this.log = Utils.getLogger("UsersComponent");
        this.instagramService = new InstagramService();
    }

    getUserById(request: any, response: any) {
        RestService.validateJWT(RestService.getAuthHeader(request),
            (err: any) => {
                RestService.sendResponse(response, 403, ResponseMessages.FORBIDDEN + err.message);
            },
            (decodedToken: any) => {
                let id: string = RestService.getPathId(request);
                new UsersService().getUserById(id,
                    (err) => {
                        RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
                    },
                    (user: IUser) => {
                        RestService.sendResponse(response, 200, ResponseMessages.SUCCESS, user.publicDetails);
                    });

            });
    }

    createUser(request: any, response: any){
        let data: IUser = RestService.getBody(request);
        try {
            ValidatorService.validateString(data.publicDetails.username, "Username");
            ValidatorService.validateString(data.publicDetails.firstName, "First Name");
            ValidatorService.validateString(data.publicDetails.lastName, "Last Name");
            ValidatorService.validateString(data.privateDetails.password, "Password");
            new UsersService().createUser(data,
                (err: any) => {
                    RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
                },
                () => {
                    RestService.sendResponse(response, 200, ResponseMessages.SUCCESS);
                });
        }
        catch (err) {
            RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
        }
    }


    getCode(request: any, response: any) {
        let code: string = RestService.getInstagramCode(request);
        new InstagramService().updateInstagramCode(code,
            (err) => {
                RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
            },
            () => {
                response.writeHead(302, {
                    'Location': 'http://localhost:8080/users/profile'
                });
                response.end();
            });

    }

    getUserProfile(request: any, response: any) {
        RestService.validateJWT(RestService.getAuthHeader(request),
            (err: any) => {
                RestService.sendResponse(response, 403, ResponseMessages.FORBIDDEN + err.message);
            },
            (decodedToken: any) => {
                let username: string = decodedToken['username'];
                new InstagramService().getUserFromInstagram(username,
                    (err) => {
                        RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
                    },
                    (userData: any) => {
                        RestService.sendResponse(response, 200, ResponseMessages.SUCCESS, userData);
                    });

            });
    }

    updateUserById(request: any, response: any) {

    }

    deleteUserById(request: any, response: any) {

    }

}
