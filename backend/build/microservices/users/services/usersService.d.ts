import { Dal } from "../../../database/dal";
import { IUser } from "../../../database/model/users/users";
import { IUserModel } from "../../../database/schema/users/usersSchema";
export declare class UsersService {
    dal: Dal;
    constructor();
    getUserById(id: string, errorCb: (err: any) => void, successCb: (user: IUserModel) => void): void;
    getUserByUsername(username: string, errorCb: (err: any) => void, successCb: (user: IUserModel) => void): void;
    createUser(data: IUser, errorCb: (err: any) => void, successCb: () => void): void;
}
