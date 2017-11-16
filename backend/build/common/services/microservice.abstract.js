"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../util/Utils");
var AbstractMicroservice = (function () {
    function AbstractMicroservice(environment, app) {
        this.environment = environment;
        this.app = app;
        this.log = Utils_1.Utils.getLogger(this.environment.name);
        this.http = require('http').Server(app);
        this.routes = new Array();
    }
    AbstractMicroservice.prototype.publishRoutes = function (routes) {
        this.routes.push(routes);
    };
    AbstractMicroservice.prototype.start = function () {
        var _this = this;
        Utils_1.Utils.conectToDB(this.environment.database, function (err) {
            err ? _this.log.error("Connection error: %s", JSON.stringify(err)) : _this.log.info('Connection to MongoDB successfully established for environment: "' + _this.environment.name + '"');
        });
        this.configureExpress(this.app);
        this.routes.forEach(function (routes, index) {
            routes.defineRoutes();
            if (index === _this.routes.length - 1) {
                _this.http.listen(_this.environment.port, function (err) {
                    if (err) {
                        _this.log.error(_this.environment.name + " micro-service not started on port: " + _this.environment.port + ": " + err);
                    }
                    else {
                        _this.log.info(_this.environment.name + " micro-service successfully started on port: " + _this.environment.port);
                    }
                });
            }
        });
    };
    return AbstractMicroservice;
}());
exports.AbstractMicroservice = AbstractMicroservice;
//# sourceMappingURL=microservice.abstract.js.map