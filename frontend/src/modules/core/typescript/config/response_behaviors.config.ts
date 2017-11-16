import {IResponseBehavior} from "../abstract/response_behavior.interface";

export const RESPONSE_BEHAVIORS: Array<IResponseBehavior> = [
    {
        status: 404,
        code: "F-SERVER-0-1",
        message: "Resource not found"
    },
    {
        status: 500,
        code: "F-SERVER-1",
        message: "Internal server error"
    },
    {
        status: 200,
        code: "S-SERVER-1",
        message: "Server working successfully"
    },
    {
        status: 400,
        code: "F-COMMON-1",
        message: "Endpoints not found"
    },
    {
        status: 200,
        code: "S-COMMON-1",
        message: "Endpoints found"
    },
    {
        status: 401,
        code: "F-AUTH-1",
        message: "Authorization failed"
    },
    {
        status: 401,
        code: "F-AUTH-1-1",
        message: "Session expired"
    },
    {
        status: 401,
        code: "F-AUTH-1-2",
        message: "No rights for this operation"
    },
    {
        status: 401,
        code: "F-AUTH-1-3",
        message: "Wrong authorisation header"
    },
    {
        status: 401,
        code: "F-AUTH-1-4",
        message: "Wrong authorisation session"
    },
    {
        status: 401,
        code: "F-AUTH-1-6",
        message: "Wrong user session"
    },
    {
        status: 401,
        code: "F-AUTH-1-7",
        message: "Wrong username"
    },
    {
        status: 401,
        code: "F-AUTH-1-8",
        message: "Wrong user password"
    },
    {
        status: 401,
        code: "F-AUTH-1-9",
        message: "Wrong user email"
    },
    {
        status: 401,
        code: "F-AUTH-1-10",
        message: "Wrong request source"
    },
    {
        status: 401,
        code: "F-AUTH-1-11",
        message: "Wrong user id"
    },
    {
        status: 401,
        code: "F-AUTH-1-12",
        message: "Blocked account"
    },
    {
        status: 200,
        code: "S-AUTH-1",
        message: "Login success"
    },
    {
        status: 401,
        code: "F-AUTH-2",
        message: "Logout failed"
    },
    {
        status: 200,
        code: "S-AUTH-2",
        message: "Logout success"
    },
    {
        status: 401,
        code: "F-AUTH-3",
        message: "Forgot password request failed"
    },
    {
        status: 200,
        code: "S-AUTH-3",
        message: "Forgot password request successfully passed"
    },
    {
        status: 401,
        code: "F-AUTH-4",
        message: "Forgot password, change password failed"
    },
    {
        status: 200,
        code: "S-AUTH-4",
        message: "Forgot password, change password successfully passed"
    },
    {
        status: 401,
        code: "F-AUTH-5",
        message: "Failed to update device identifier"
    },
    {
        status: 200,
        code: "S-AUTH-5",
        message: "Device identifier successfully updated"
    }
];