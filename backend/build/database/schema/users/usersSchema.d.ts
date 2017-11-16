import { Document, Schema, Model } from "mongoose";
import { IUser } from "../../model/users/users";
export interface IUserModel extends IUser, Document {
}
export declare let UserSchema: Schema;
export declare const User: Model<IUserModel>;
