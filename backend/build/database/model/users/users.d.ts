export interface IUser {
    publicDetails: IPublicDetails;
    privateDetails: IPrivateDetails;
}
export interface IPublicDetails {
    username: string;
    firstName: string;
    lastName: string;
    birthdate: number;
    address: IAddress;
}
export interface IPrivateDetails {
    password: string;
    code: string;
    token: string;
    client_id: string;
}
export interface IAddress {
    country: string;
    town: string;
    address: string;
}
