"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restService_1 = require("../../../common/services/restService");
var definition_1 = require("../../../common/services/definitions/definition");
var authComponent_1 = require("../components/authComponent");
var AuthRoutes = (function () {
    function AuthRoutes(app) {
        this.app = app;
        this.authComponent = new authComponent_1.AuthComponent();
    }
    AuthRoutes.prototype.defineRoutes = function () {
        this.app.post(restService_1.RestService.generateRoute(definition_1.Api.AUTH, definition_1.AuthActions.login), this.authComponent.login);
        this.app.get(restService_1.RestService.generateRoute(definition_1.Api.AUTH, definition_1.AuthActions.logout), this.authComponent.logout);
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=authRoutes.js.map