"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4js = require("log4js");
var mongoose = require("mongoose");
var constants_1 = require("../constants/constants");
var Utils = (function () {
    function Utils() {
    }
    Utils.getLogger = function (name) {
        var logger = log4js.getLogger(name);
        logger.setLevel("DEBUG");
        return logger;
    };
    Utils.generateBaseUrl = function (environment) {
        return environment.protocol + "://" + environment.host + ":" + environment.port;
    };
    Utils.getFullPath = function (path) {
        return constants_1.Constants.SLASH + constants_1.Constants.API + constants_1.Constants.SLASH + constants_1.Constants.VERSION + constants_1.Constants.SLASH + path;
    };
    Utils.getTime = function () {
        return Date.now();
    };
    Utils.conectToDB = function (dbUrl, callback) {
        mongoose.Promise = global.Promise;
        mongoose.connect(dbUrl, {}, callback);
    };
    Utils.defined = function (value) {
        return value !== undefined;
    };
    Utils.isArray = function (value) {
        return Utils.notNull(value) && Object.prototype.toString.call([]) === '[object Array]';
    };
    Utils.notNull = function (value) {
        return (this.defined(value) && value !== null);
    };
    Utils.isNumber = function (value) {
        return (this.notNull(value) && !isNaN(value));
    };
    Utils.isNull = function (value) {
        return !this.notNull(value);
    };
    Utils.notEmpty = function (value) {
        return (this.notNull(value) && value !== "");
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map