export interface IValidatiorResponse {
    [key: string]: boolean;
}

export interface IEmailClient {
    (exist: boolean, providerLink: string): void
}
