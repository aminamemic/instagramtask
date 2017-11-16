"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dal_1 = require("../../../database/dal");
var usersSchema_1 = require("../../../database/schema/users/usersSchema");
var Cryptography_1 = require("../../../common/util/Cryptography");
var UsersService = (function () {
    function UsersService() {
        this.dal = new dal_1.Dal();
    }
    UsersService.prototype.getUserById = function (id, errorCb, successCb) {
        this.dal.findDocumentById(usersSchema_1.User, id, errorCb, successCb);
    };
    UsersService.prototype.getUserByUsername = function (username, errorCb, successCb) {
        this.dal.findOneDocument(usersSchema_1.User, { "publicDetails.username": username }, errorCb, successCb);
    };
    UsersService.prototype.createUser = function (data, errorCb, successCb) {
        data.privateDetails.password = Cryptography_1.Cryptography.hashPassword(data.privateDetails.password);
        this.dal.createDocument(usersSchema_1.User, data, errorCb, successCb);
    };
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=usersService.js.map