"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var microservice_abstract_1 = require("../../common/services/microservice.abstract");
var environments_LOCAL_1 = require("../../common/environments/environments_LOCAL");
var constants_1 = require("../../common/constants/constants");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require("morgan");
var cors = require("cors");
var authRoutes_1 = require("./routes/authRoutes");
var usersRoutes_1 = require("./routes/usersRoutes");
var UsersMicroservice = (function (_super) {
    __extends(UsersMicroservice, _super);
    function UsersMicroservice() {
        var _this = _super.call(this, environments_LOCAL_1.Environments.users, express()) || this;
        _this.publishRoutes(new authRoutes_1.AuthRoutes(_this.app));
        _this.publishRoutes(new usersRoutes_1.UsersRoutes(_this.app));
        return _this;
    }
    UsersMicroservice.prototype.configureExpress = function (app) {
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        app.use(bodyParser.raw({
            inflate: true,
            limit: '50mb',
            type: 'application/pdf'
        }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.raw({ type: 'multipart/form-data*' }));
        app.use(methodOverride('X-HTTP-Method-Override'));
        app.use(morgan('dev'));
        app.use(cors({
            origin: true,
            credentials: true,
            exposedHeaders: [constants_1.Constants.HEADERS.AUTH],
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            optionsSuccessStatus: 204
        }));
        app.use(cors({ exposedHeaders: [constants_1.Constants.HEADERS.AUTH] }));
    };
    return UsersMicroservice;
}(microservice_abstract_1.AbstractMicroservice));
exports.UsersMicroservice = UsersMicroservice;
//# sourceMappingURL=usersMicroservice.js.map