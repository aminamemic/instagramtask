export declare type MicroService = 'AUTH';
export declare class MicroServices {
    static AUTH: MicroService;
}
export declare class Constants {
    static API: string;
    static VERSION: string;
    static SLASH: string;
    static PUBLIC: string;
    static ALL: string;
    static PASSWORD_PATTERN: RegExp;
    static EMAIL_PATTERN: RegExp;
    static MINUTE_IN_MS: number;
    static HOUR_IN_MS: number;
    static DAY_IN_MS: number;
    static MONTH_IN_MS: number;
    static TOKEN_DURATION_MS: number;
    static REQUEST_TIMEOUT: number;
    static MS_REQUEST_TIMEOUT: number;
    static ALLOWED_IMAGE_TYPES: string[];
    static SECRET: string;
    static HEADERS: {
        AUTH: string;
        CONTENT: string;
        JSON: string;
    };
    static DATABASE: {
        MODEL: {
            USER: string;
        };
    };
}
export declare class Instagram {
    static INSTAGRAM_ROUTE: string;
    static GET_AUTH_TOKEN_ROUTE: string;
    static CLIENT_ID: string;
    static CLIENT_SECRET: string;
    static GRANT_TYPE: string;
    static REDIRECT_URL: string;
    static INSTAGRAM_USER_DATA: string;
    static INSTAGRAM_USER_MEDIA: string;
    static AUTH_REDIRECT_URL: string;
    static INSTAGRAM_DATA_PATHS: string[];
}
