import {Dal} from "../../../database/dal";
import {IUser} from "../../../database/model/users/users";
import {IUserModel, User} from "../../../database/schema/users/usersSchema";
import {Cryptography} from "../../../common/util/Cryptography";

export class UsersService{

    dal: Dal;

    constructor(){
        this.dal = new Dal();
    }

    getUserById(id: string, errorCb: (err: any) => void, successCb: (user: IUserModel) => void){
        this.dal.findDocumentById<IUserModel>(User, id, errorCb, successCb);
    }

    getUserByUsername(username: string, errorCb: (err: any) => void, successCb: (user: IUserModel) => void){
        this.dal.findOneDocument<IUserModel>(User, {"publicDetails.username": username}, errorCb, successCb);
    }

    createUser(data: IUser, errorCb: (err: any) => void, successCb: () => void){
        data.privateDetails.password = Cryptography.hashPassword(data.privateDetails.password);
        this.dal.createDocument<IUserModel>(User, data, errorCb, successCb);
    }

}
