import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import {IUser} from "../../database/model/users/users";
import {Constants} from "../constants/constants";

export class Cryptography {

    constructor() {

    }

    static hashPassword(password: string) {
        return bcrypt.hashSync(password);
    }

    static comparePassword(password: string, hash: string) {
        return bcrypt.compareSync(password, hash);
    }

    static generateJWT(user: any) {
        return jwt.sign(user, Constants.SECRET, {expiresIn: Constants.TOKEN_DURATION_MS});
    }

    static verifyJWT(token: string, errorCb: (err: any) => void, successCb: (userId: string) => void) {
        jwt.verify(token, Constants.SECRET,
            (err: any, decoded: any) => {
               err ? errorCb(err) : successCb(decoded);
            });
    }

}
