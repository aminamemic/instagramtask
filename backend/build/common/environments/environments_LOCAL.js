"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments = (function () {
    function Environments() {
    }
    Environments.users = {
        name: "Users",
        protocol: "http",
        host: "localhost",
        port: 700,
        database: 'mongodb://userAdmin:amina@localhost:27017/users',
        logLevel: 'DEBUG'
    };
    return Environments;
}());
exports.Environments = Environments;
//# sourceMappingURL=environments_LOCAL.js.map