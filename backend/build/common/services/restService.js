"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var definition_1 = require("./definitions/definition");
var Utils_1 = require("../util/Utils");
var constants_1 = require("../constants/constants");
var Cryptography_1 = require("../util/Cryptography");
var ResponseData = (function () {
    function ResponseData(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.time = Utils_1.Utils.getTime();
    }
    return ResponseData;
}());
exports.ResponseData = ResponseData;
var RestService = (function () {
    function RestService() {
    }
    RestService.generateRoute = function (apiName, action) {
        for (var i = 0, len = definition_1.API_DEFINITIONS.length; i < len; i++) {
            if (definition_1.API_DEFINITIONS[i].name === apiName) {
                for (var j = 0, len_1 = definition_1.API_DEFINITIONS[i].actions.length; j < len_1; j++) {
                    if (definition_1.API_DEFINITIONS[i].actions[j].action === action) {
                        return Utils_1.Utils.getFullPath(definition_1.API_DEFINITIONS[i].basePath + "/" + definition_1.API_DEFINITIONS[i].actions[j].path);
                    }
                }
            }
        }
    };
    RestService.sendResponse = function (response, status, message, data) {
        var responseData = new ResponseData(status, message, data);
        response.writeHead(status, { "Content-Type": constants_1.Constants.HEADERS.JSON });
        response.end(JSON.stringify(responseData));
    };
    RestService.sendAuthResponse = function (response, status, message, token, userData) {
        var responseData = new ResponseData(status, message, userData);
        response.set(constants_1.Constants.HEADERS.AUTH, token);
        response.writeHead(status, { "Content-Type": constants_1.Constants.HEADERS.JSON });
        response.end(JSON.stringify(responseData));
    };
    RestService.getBody = function (request) {
        if (Utils_1.Utils.notNull(request.body)) {
            return request.body;
        }
        else {
            throw new Error("Body not provided");
        }
    };
    RestService.getPathId = function (request) {
        if (Utils_1.Utils.notNull(request.params.id)) {
            return request.params.id;
        }
        else {
            throw new Error("Path id not provided");
        }
    };
    RestService.getAuthHeader = function (request) {
        return request.get(constants_1.Constants.HEADERS.AUTH);
    };
    RestService.getInstagramCode = function (request) {
        return request.query.code;
    };
    RestService.validateJWT = function (token, errorCb, successCb) {
        if (!token) {
            errorCb(new Error("JWT token not exist in header user-auth"));
        }
        else {
            Cryptography_1.Cryptography.verifyJWT(token, errorCb, successCb);
        }
    };
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=restService.js.map