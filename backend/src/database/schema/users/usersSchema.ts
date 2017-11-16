import {Document, Schema, Model, model} from "mongoose";
import {Utils} from "../../../common/util/Utils";
import {IUser} from "../../model/users/users";

export interface IUserModel extends IUser, Document {

}

export let UserSchema: Schema = new Schema({
    publicDetails: {
        username: String,
        firstName: String,
        lastName: String,
        birthdate: Number,
        address: {
            country: String,
            town: String,
            address: String
        }
    },
    privateDetails: {
        password: String,
        code: String,
        token: String,
        client_id: String
    }
});


export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);