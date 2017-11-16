"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restService_1 = require("../../../common/services/restService");
var definition_1 = require("../../../common/services/definitions/definition");
var usersComponent_1 = require("../components/usersComponent");
var UsersRoutes = (function () {
    function UsersRoutes(app) {
        this.app = app;
        this.usersComponent = new usersComponent_1.UsersComponent();
    }
    UsersRoutes.prototype.defineRoutes = function () {
        this.app.get(restService_1.RestService.generateRoute(definition_1.Api.USERS, definition_1.UsersActions.getCode), this.usersComponent.getCode);
        this.app.get(restService_1.RestService.generateRoute(definition_1.Api.USERS, definition_1.UsersActions.getUserProfile), this.usersComponent.getUserProfile);
        this.app.get(restService_1.RestService.generateRoute(definition_1.Api.USERS, definition_1.UsersActions.getUserById), this.usersComponent.getUserById);
        this.app.post(restService_1.RestService.generateRoute(definition_1.Api.USERS, definition_1.UsersActions.createUser), this.usersComponent.createUser);
        this.app.put(restService_1.RestService.generateRoute(definition_1.Api.USERS, definition_1.UsersActions.updateUserById), this.usersComponent.updateUserById);
        this.app.delete(restService_1.RestService.generateRoute(definition_1.Api.USERS, definition_1.UsersActions.deleteUserById), this.usersComponent.deleteUserById);
    };
    return UsersRoutes;
}());
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=usersRoutes.js.map