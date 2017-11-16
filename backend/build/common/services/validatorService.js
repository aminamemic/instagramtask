"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../util/Utils");
var ValidatorService = (function () {
    function ValidatorService() {
    }
    ValidatorService.validateString = function (value, fieldName) {
        if (!Utils_1.Utils.notEmpty(value)) {
            var message = fieldName + " is null or empty";
            throw new Error(message);
        }
    };
    ValidatorService.validateBoolean = function (value, fieldName) {
        if (!value) {
            var message = fieldName + " has invalid value";
            throw new Error(message);
        }
    };
    ValidatorService.validateLength = function (length, max, name) {
        if (name === void 0) { name = "String"; }
        if (Utils_1.Utils.notNull(length) && Utils_1.Utils.notNull(max) && length > max) {
            var message = name + " size is: " + length + " but max is: " + max;
            throw new Error(message);
        }
    };
    ValidatorService.validateObject = function (object, objectName) {
        if (objectName === void 0) { objectName = "Object"; }
        if (!Utils_1.Utils.notNull(object)) {
            var message = objectName + " is null, empty or undefined";
            throw new Error(message);
        }
    };
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;
//# sourceMappingURL=validatorService.js.map