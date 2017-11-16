"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api = (function () {
    function Api() {
    }
    Api.AUTH = "authentication";
    Api.USERS = "users";
    return Api;
}());
exports.Api = Api;
var ApiMethods = (function () {
    function ApiMethods() {
    }
    ApiMethods.ANY = 'ANY';
    ApiMethods.POST = 'POST';
    ApiMethods.GET = 'GET';
    ApiMethods.PUT = 'PUT';
    ApiMethods.DELETE = 'DELETE';
    return ApiMethods;
}());
exports.ApiMethods = ApiMethods;
var AuthActions = (function () {
    function AuthActions() {
    }
    AuthActions.login = 'login';
    AuthActions.logout = 'logout';
    return AuthActions;
}());
exports.AuthActions = AuthActions;
var UsersActions = (function () {
    function UsersActions() {
    }
    UsersActions.getUserById = 'getUserById';
    UsersActions.searchUsers = 'searchUsers';
    UsersActions.createUser = 'createUser';
    UsersActions.updateUserById = 'updateUserById';
    UsersActions.deleteUserById = 'deleteUserById';
    UsersActions.getCode = 'getCode';
    UsersActions.getUserProfile = 'getUserProfile';
    return UsersActions;
}());
exports.UsersActions = UsersActions;
exports.API_DEFINITIONS = [
    {
        name: Api.AUTH,
        basePath: "auth",
        actions: [
            {
                action: AuthActions.login,
                method: ApiMethods.POST,
                path: "login"
            },
            {
                action: AuthActions.logout,
                method: ApiMethods.GET,
                path: "logout"
            }
        ]
    },
    {
        name: Api.USERS,
        basePath: "users",
        actions: [
            {
                action: UsersActions.createUser,
                method: ApiMethods.POST,
                path: ""
            },
            {
                action: UsersActions.getCode,
                method: ApiMethods.GET,
                path: "code"
            },
            {
                action: UsersActions.getUserProfile,
                method: ApiMethods.GET,
                path: "profile"
            },
            {
                action: UsersActions.getUserById,
                method: ApiMethods.GET,
                path: ":id"
            },
            {
                action: UsersActions.updateUserById,
                method: ApiMethods.PUT,
                path: ":id"
            },
            {
                action: UsersActions.deleteUserById,
                method: ApiMethods.DELETE,
                path: ":id"
            }
        ]
    }
];
var ResponseMessages = (function () {
    function ResponseMessages() {
    }
    ResponseMessages.SUCCESS = 'Operation successfully completed';
    ResponseMessages.ERROR = 'Error: ';
    ResponseMessages.USER_NOT_EXIST = 'User not exist';
    ResponseMessages.WRONG_PASSWORD = 'Wrong password';
    ResponseMessages.LOGIN_SUCCESS = 'Login success';
    ResponseMessages.FORBIDDEN = 'Forbidden: ';
    return ResponseMessages;
}());
exports.ResponseMessages = ResponseMessages;
//# sourceMappingURL=definition.js.map