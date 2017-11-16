export type MicroService = 'AUTH';

export class MicroServices{
    static AUTH: MicroService = 'AUTH';

}

export class Constants {
    static API = 'api';
    static VERSION = 'v1';
    static SLASH = '/';
    static PUBLIC = "PUBLIC";
    static ALL = "All";
    static PASSWORD_PATTERN = /.{5,}/;
    static EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    static MINUTE_IN_MS = 1000 * 60;
    static HOUR_IN_MS = Constants.MINUTE_IN_MS * 60;
    static DAY_IN_MS = Constants.HOUR_IN_MS * 24;
    static MONTH_IN_MS = Constants.DAY_IN_MS * 30;
    static TOKEN_DURATION_MS = 24 * Constants.HOUR_IN_MS;
    static REQUEST_TIMEOUT = 15000;
    static MS_REQUEST_TIMEOUT = 12000;
    static ALLOWED_IMAGE_TYPES = [ "jpg", "png", "jpeg", "gif" ];
    static SECRET = '!"#$%&/()=?*';

    static HEADERS = {
        AUTH: "user-auth",
        CONTENT: "Content-Type",
        JSON: "application/json; charset=utf-8",
    };

    static DATABASE = {
        MODEL: {
            USER: "Users"
        }
    };
}

export class Instagram {
    static INSTAGRAM_ROUTE = 'https://api.instagram.com/v1';
    static GET_AUTH_TOKEN_ROUTE = 'https://api.instagram.com/oauth/access_token';
    static CLIENT_ID = '33c711acd2c14356952c83cfe4f8d7e8';
    static CLIENT_SECRET= 'a3f1e7631ced49fab187980cb3a45f4e';
    static GRANT_TYPE = 'authorization_code';
    static REDIRECT_URL = 'http://localhost:700/api/v1/users/code';
    static INSTAGRAM_USER_DATA = '/users/self/?access_token=';
    static INSTAGRAM_USER_MEDIA = '/users/self/media/recent/?access_token=' ;
    static AUTH_REDIRECT_URL = 'https://api.instagram.com/oauth/authorize/?client_id=' + Instagram.CLIENT_ID + '&redirect_uri=' + Instagram.REDIRECT_URL + '&response_type=code';
    static INSTAGRAM_DATA_PATHS = [Instagram.INSTAGRAM_USER_DATA, Instagram.INSTAGRAM_USER_MEDIA];
}
