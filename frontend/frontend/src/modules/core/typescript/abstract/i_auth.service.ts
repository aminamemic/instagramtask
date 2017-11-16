import {IResponseCallback} from "./response.interface";
import {ILoginData, IForgotPasswordData, IChangePasswordData} from "../../../auth/typescript/abstract/auth.interface";

export interface IAuthService {

    isLoggedIn(): boolean

    login(loginData: ILoginData, responseCallback: IResponseCallback): void

}