"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../common/constants/constants");
var request = require("request");
var dal_1 = require("../../../database/dal");
var usersSchema_1 = require("../../../database/schema/users/usersSchema");
var usersService_1 = require("./usersService");
var Utils_1 = require("../../../common/util/Utils");
var InstagramService = (function () {
    function InstagramService() {
        this.usersService = new usersService_1.UsersService();
        this.dal = new dal_1.Dal();
    }
    InstagramService.prototype.updateInstagramCode = function (code, errorCb, successCb) {
        var testAccount = "tasksofthouse";
        this.dal.updateDocumentByFilter(usersSchema_1.User, { 'publicDetails.username': testAccount }, { 'privateDetails.code': code }, errorCb, successCb);
    };
    InstagramService.prototype.getUserFromInstagram = function (username, errorCb, successCb) {
        var _this = this;
        this.usersService.getUserByUsername(username, errorCb, function (user) {
            if (!Utils_1.Utils.notNull(user)) {
                errorCb(new Error());
            }
            else {
                _this.getTokenFromInstagram(username, user.privateDetails.code, errorCb, function (token) {
                    _this.getDataFromInstagram(token, errorCb, successCb);
                });
            }
        });
    };
    InstagramService.prototype.getTokenFromInstagram = function (username, code, errorCb, successCb) {
        var _this = this;
        var tokenRequestOptions = {
            url: constants_1.Instagram.GET_AUTH_TOKEN_ROUTE,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            },
            form: {
                client_id: constants_1.Instagram.CLIENT_ID,
                client_secret: constants_1.Instagram.CLIENT_SECRET,
                grant_type: constants_1.Instagram.GRANT_TYPE,
                redirect_uri: constants_1.Instagram.REDIRECT_URL,
                code: code
            }
        };
        request(tokenRequestOptions, function (error, response, body) {
            if (error) {
                errorCb(error);
            }
            else {
                var token_1 = JSON.parse(body)['access_token'];
                _this.dal.updateDocumentByFilter(usersSchema_1.User, { 'publicDetails.username': username }, { 'privateDetails.token': token_1 }, errorCb, function () {
                    successCb(token_1);
                });
            }
        });
    };
    InstagramService.prototype.getDataFromInstagram = function (token, errorCb, successCb) {
        var _this = this;
        var data = {};
        var requests = 0;
        constants_1.Instagram.INSTAGRAM_DATA_PATHS.forEach(function (path) {
            requests++;
            _this.getSpecificDataFromInstagram(path, data, token, function (err) {
                requests--;
                if (requests == 0)
                    successCb(data);
            }, function (data) {
                requests--;
                if (requests == 0)
                    successCb(data);
            });
        });
    };
    InstagramService.prototype.getSpecificDataFromInstagram = function (path, data, token, errorCb, successCb) {
        var url = 'https://api.instagram.com/v1' + path + token;
        request(url, function (error, response, body) {
            if (error) {
                errorCb(error);
            }
            else {
                switch (path) {
                    case constants_1.Instagram.INSTAGRAM_USER_DATA:
                        console.log("USER " + body);
                        data['user'] = JSON.parse(body)['data'];
                        break;
                    case constants_1.Instagram.INSTAGRAM_USER_MEDIA:
                        data['media'] = JSON.parse(body)['data'];
                        console.log("MEDIA " + body);
                        break;
                }
                successCb(data);
            }
        });
    };
    return InstagramService;
}());
exports.InstagramService = InstagramService;
//# sourceMappingURL=instagramService.js.map