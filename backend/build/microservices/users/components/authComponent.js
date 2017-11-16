"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../../../common/util/Utils");
var restService_1 = require("../../../common/services/restService");
var definition_1 = require("../../../common/services/definitions/definition");
var validatorService_1 = require("../../../common/services/validatorService");
var usersService_1 = require("../services/usersService");
var Cryptography_1 = require("../../../common/util/Cryptography");
var AuthComponent = (function () {
    function AuthComponent() {
        this.log = Utils_1.Utils.getLogger("AuthComponent");
    }
    AuthComponent.prototype.login = function (request, response) {
        try {
            var loginData_1 = restService_1.RestService.getBody(request);
            validatorService_1.ValidatorService.validateString(loginData_1.username, "Username");
            validatorService_1.ValidatorService.validateString(loginData_1.password, "Password");
            new usersService_1.UsersService().getUserByUsername(loginData_1.username, function (err) {
                restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
            }, function (user) {
                if (!Utils_1.Utils.notNull(user)) {
                    restService_1.RestService.sendResponse(response, 403, definition_1.ResponseMessages.USER_NOT_EXIST);
                }
                else {
                    if (Cryptography_1.Cryptography.comparePassword(loginData_1.password, user.privateDetails.password)) {
                        restService_1.RestService.sendAuthResponse(response, 200, definition_1.ResponseMessages.LOGIN_SUCCESS, Cryptography_1.Cryptography.generateJWT(user['publicDetails']), user.publicDetails);
                    }
                    else {
                        restService_1.RestService.sendResponse(response, 403, definition_1.ResponseMessages.WRONG_PASSWORD);
                    }
                }
            });
        }
        catch (err) {
            restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
        }
    };
    AuthComponent.prototype.logout = function (request, response) {
    };
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=authComponent.js.map