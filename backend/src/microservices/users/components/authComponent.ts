import {Logger} from "log4js";
import {Utils} from "../../../common/util/Utils";
import {RestService} from "../../../common/services/restService";
import {ResponseMessages} from "../../../common/services/definitions/definition";
import {ILoginRequest} from "../rest/requests/requests";
import {ValidatorService} from "../../../common/services/validatorService";
import {UsersService} from "../services/usersService";
import {IUser} from "../../../database/model/users/users";
import {Cryptography} from "../../../common/util/Cryptography";
import {IUserModel} from "../../../database/schema/users/usersSchema";

export class AuthComponent {

    log: Logger;

    constructor() {
        this.log = Utils.getLogger("AuthComponent");
    }

    login(request: any, response: any) {
        try {
          let loginData: ILoginRequest = RestService.getBody(request);
          ValidatorService.validateString(loginData.username, "Username");
          ValidatorService.validateString(loginData.password, "Password");
          new UsersService().getUserByUsername(loginData.username,
              (err: any) => {
               RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
              },
              (user: IUserModel) => {
                  if(!Utils.notNull(user)){
                      RestService.sendResponse(response, 403, ResponseMessages.USER_NOT_EXIST);
                  }
                  else{
                     if(Cryptography.comparePassword(loginData.password, user.privateDetails.password)){

                         RestService.sendAuthResponse(response, 200, ResponseMessages.LOGIN_SUCCESS, Cryptography.generateJWT(user['publicDetails']), user.publicDetails);
                     }
                     else{
                         RestService.sendResponse(response, 403, ResponseMessages.WRONG_PASSWORD);
                     }
                  }
              });
        }
        catch (err) {
            RestService.sendResponse(response, 500, ResponseMessages.ERROR + err.message);
        }
    }

    logout(request: any, response: any){

    }

}
