export declare class InstagramService {
    private dal;
    private usersService;
    constructor();
    updateInstagramCode(code: string, errorCb: (err: any) => void, successCb: () => void): void;
    getUserFromInstagram(username: string, errorCb: (err: any) => void, successCb: (userData: any) => void): void;
    getTokenFromInstagram(username: string, code: string, errorCb: (err: any) => void, successCb: (token: string) => void): void;
    getDataFromInstagram(token: string, errorCb: (err: any) => void, successCb: (data: any) => void): void;
    getSpecificDataFromInstagram(path: string, data: any, token: string, errorCb: (err: any) => void, successCb: (data: any) => void): void;
}
