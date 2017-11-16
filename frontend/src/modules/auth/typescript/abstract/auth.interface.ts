export interface ILoginData {
    username?: string,
    password?: string
}

export interface IForgotPasswordData {
    email?: string
}

export interface IChangePasswordData {
    userId?: string,
    identificationId?: string,
    password?: string,
    newPassword?: string
}