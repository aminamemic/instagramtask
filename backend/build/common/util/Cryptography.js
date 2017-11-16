"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");
var constants_1 = require("../constants/constants");
var Cryptography = (function () {
    function Cryptography() {
    }
    Cryptography.hashPassword = function (password) {
        return bcrypt.hashSync(password);
    };
    Cryptography.comparePassword = function (password, hash) {
        return bcrypt.compareSync(password, hash);
    };
    Cryptography.generateJWT = function (user) {
        return jwt.sign(user, constants_1.Constants.SECRET, { expiresIn: constants_1.Constants.TOKEN_DURATION_MS });
    };
    Cryptography.verifyJWT = function (token, errorCb, successCb) {
        jwt.verify(token, constants_1.Constants.SECRET, function (err, decoded) {
            err ? errorCb(err) : successCb(decoded);
        });
    };
    return Cryptography;
}());
exports.Cryptography = Cryptography;
//# sourceMappingURL=Cryptography.js.map