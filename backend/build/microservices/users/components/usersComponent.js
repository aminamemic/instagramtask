"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../../../common/util/Utils");
var restService_1 = require("../../../common/services/restService");
var definition_1 = require("../../../common/services/definitions/definition");
var validatorService_1 = require("../../../common/services/validatorService");
var usersService_1 = require("../services/usersService");
var instagramService_1 = require("../services/instagramService");
var UsersComponent = (function () {
    function UsersComponent() {
        this.log = Utils_1.Utils.getLogger("UsersComponent");
        this.instagramService = new instagramService_1.InstagramService();
    }
    UsersComponent.prototype.getUserById = function (request, response) {
        restService_1.RestService.validateJWT(restService_1.RestService.getAuthHeader(request), function (err) {
            restService_1.RestService.sendResponse(response, 403, definition_1.ResponseMessages.FORBIDDEN + err.message);
        }, function (decodedToken) {
            var id = restService_1.RestService.getPathId(request);
            new usersService_1.UsersService().getUserById(id, function (err) {
                restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
            }, function (user) {
                restService_1.RestService.sendResponse(response, 200, definition_1.ResponseMessages.SUCCESS, user.publicDetails);
            });
        });
    };
    UsersComponent.prototype.createUser = function (request, response) {
        var data = restService_1.RestService.getBody(request);
        try {
            validatorService_1.ValidatorService.validateString(data.publicDetails.username, "Username");
            validatorService_1.ValidatorService.validateString(data.publicDetails.firstName, "First Name");
            validatorService_1.ValidatorService.validateString(data.publicDetails.lastName, "Last Name");
            validatorService_1.ValidatorService.validateString(data.privateDetails.password, "Password");
            new usersService_1.UsersService().createUser(data, function (err) {
                restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
            }, function () {
                restService_1.RestService.sendResponse(response, 200, definition_1.ResponseMessages.SUCCESS);
            });
        }
        catch (err) {
            restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
        }
    };
    UsersComponent.prototype.getCode = function (request, response) {
        var code = restService_1.RestService.getInstagramCode(request);
        new instagramService_1.InstagramService().updateInstagramCode(code, function (err) {
            restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
        }, function () {
            response.writeHead(302, {
                'Location': 'http://localhost:8080/users/profile'
            });
            response.end();
        });
    };
    UsersComponent.prototype.getUserProfile = function (request, response) {
        restService_1.RestService.validateJWT(restService_1.RestService.getAuthHeader(request), function (err) {
            restService_1.RestService.sendResponse(response, 403, definition_1.ResponseMessages.FORBIDDEN + err.message);
        }, function (decodedToken) {
            var username = decodedToken['username'];
            new instagramService_1.InstagramService().getUserFromInstagram(username, function (err) {
                restService_1.RestService.sendResponse(response, 500, definition_1.ResponseMessages.ERROR + err.message);
            }, function (userData) {
                restService_1.RestService.sendResponse(response, 200, definition_1.ResponseMessages.SUCCESS, userData);
            });
        });
    };
    UsersComponent.prototype.updateUserById = function (request, response) {
    };
    UsersComponent.prototype.deleteUserById = function (request, response) {
    };
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=usersComponent.js.map