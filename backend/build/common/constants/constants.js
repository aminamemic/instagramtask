"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MicroServices = (function () {
    function MicroServices() {
    }
    MicroServices.AUTH = 'AUTH';
    return MicroServices;
}());
exports.MicroServices = MicroServices;
var Constants = (function () {
    function Constants() {
    }
    Constants.API = 'api';
    Constants.VERSION = 'v1';
    Constants.SLASH = '/';
    Constants.PUBLIC = "PUBLIC";
    Constants.ALL = "All";
    Constants.PASSWORD_PATTERN = /.{5,}/;
    Constants.EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Constants.MINUTE_IN_MS = 1000 * 60;
    Constants.HOUR_IN_MS = Constants.MINUTE_IN_MS * 60;
    Constants.DAY_IN_MS = Constants.HOUR_IN_MS * 24;
    Constants.MONTH_IN_MS = Constants.DAY_IN_MS * 30;
    Constants.TOKEN_DURATION_MS = 24 * Constants.HOUR_IN_MS;
    Constants.REQUEST_TIMEOUT = 15000;
    Constants.MS_REQUEST_TIMEOUT = 12000;
    Constants.ALLOWED_IMAGE_TYPES = ["jpg", "png", "jpeg", "gif"];
    Constants.SECRET = '!"#$%&/()=?*';
    Constants.HEADERS = {
        AUTH: "user-auth",
        CONTENT: "Content-Type",
        JSON: "application/json; charset=utf-8",
    };
    Constants.DATABASE = {
        MODEL: {
            USER: "Users"
        }
    };
    return Constants;
}());
exports.Constants = Constants;
var Instagram = (function () {
    function Instagram() {
    }
    Instagram.INSTAGRAM_ROUTE = 'https://api.instagram.com/v1';
    Instagram.GET_AUTH_TOKEN_ROUTE = 'https://api.instagram.com/oauth/access_token';
    Instagram.CLIENT_ID = '33c711acd2c14356952c83cfe4f8d7e8';
    Instagram.CLIENT_SECRET = 'a3f1e7631ced49fab187980cb3a45f4e';
    Instagram.GRANT_TYPE = 'authorization_code';
    Instagram.REDIRECT_URL = 'http://localhost:700/api/v1/users/code';
    Instagram.INSTAGRAM_USER_DATA = '/users/self/?access_token=';
    Instagram.INSTAGRAM_USER_MEDIA = '/users/self/media/recent/?access_token=';
    Instagram.AUTH_REDIRECT_URL = 'https://api.instagram.com/oauth/authorize/?client_id=' + Instagram.CLIENT_ID + '&redirect_uri=' + Instagram.REDIRECT_URL + '&response_type=code';
    Instagram.INSTAGRAM_DATA_PATHS = [Instagram.INSTAGRAM_USER_DATA, Instagram.INSTAGRAM_USER_MEDIA];
    return Instagram;
}());
exports.Instagram = Instagram;
//# sourceMappingURL=constants.js.map