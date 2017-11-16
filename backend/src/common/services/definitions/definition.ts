export class Api{
    static AUTH: string = "authentication";
    static USERS: string = "users";
}


export class ApiMethods {
    static ANY: string = 'ANY';
    static POST: string = 'POST';
    static GET: string = 'GET';
    static PUT: string = 'PUT';
    static DELETE: string = 'DELETE';
}


export interface ApiDefinition {
    name: string;
    basePath: string;
    actions: Array<ApiAction>;
}

export interface ApiAction {
    action: string;
    method: string;
    path: string;
}


export class AuthActions {
    static login: string = 'login';
    static logout: string = 'logout';
}

export class UsersActions {
    static getUserById: string = 'getUserById';
    static searchUsers: string = 'searchUsers';
    static createUser: string = 'createUser';
    static updateUserById: string = 'updateUserById';
    static deleteUserById: string = 'deleteUserById';
    static getCode: string = 'getCode';
    static getUserProfile: string = 'getUserProfile';
}



export const API_DEFINITIONS: Array<ApiDefinition> = [
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

export class ResponseMessages{
    static SUCCESS: string = 'Operation successfully completed';
    static ERROR: string = 'Error: ';
    static USER_NOT_EXIST: string = 'User not exist';
    static WRONG_PASSWORD: string = 'Wrong password';
    static LOGIN_SUCCESS: string = 'Login success';
    static FORBIDDEN: string = 'Forbidden: ';
}