export interface IPublicDetails {
    username?: string;
    firstName?: string;
    lastName?: string;
    birthdate?: number;
    address?: IAddress;
}


export interface IPrivateDetails {
    password?: string;
    access_token?: string;
}

export interface IAddress {
    country?: string;
    town?: string;
    address?: string;
}

export interface IUser{
    publicDetails?: IPublicDetails;
    privateDetails?: IPrivateDetails;
}

