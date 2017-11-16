import {Instagram} from "../../../common/constants/constants";
import * as request from "request";
import {Dal} from "../../../database/dal";
import {IUserModel, User} from "../../../database/schema/users/usersSchema";
import {UsersService} from "./usersService";
import {Utils} from "../../../common/util/Utils";

export class InstagramService {

    private dal: Dal;
    private usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();
        this.dal = new Dal();
    }

    updateInstagramCode(code: string, errorCb: (err: any) => void, successCb: () => void) {
        let testAccount: string = "tasksofthouse";
        this.dal.updateDocumentByFilter<IUserModel>(User, {'publicDetails.username': testAccount}, {'privateDetails.code': code},
            errorCb,
            successCb);
    }

    getUserFromInstagram(username: string, errorCb: (err: any) => void, successCb: (userData: any) => void) {
        this.usersService.getUserByUsername(username, errorCb,
            (user: IUserModel) => {
                if(!Utils.notNull(user)){
                   errorCb(new Error());
                }
                else{
                    this.getTokenFromInstagram(username, user.privateDetails.code,
                        errorCb,
                        (token: string) => {
                            // call request for user data and after you received data call success callback with data from instagram
                            this.getDataFromInstagram(token, errorCb, successCb);

                        });
                }
            });
    }


    getTokenFromInstagram(username: string, code: string, errorCb: (err: any) => void, successCb: (token: string) => void) {
        let tokenRequestOptions: any = {
            url: Instagram.GET_AUTH_TOKEN_ROUTE,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            },
            form: {
                client_id: Instagram.CLIENT_ID,
                client_secret: Instagram.CLIENT_SECRET,
                grant_type: Instagram.GRANT_TYPE,
                redirect_uri: Instagram.REDIRECT_URL,
                code: code
            }
        };
        request(tokenRequestOptions, (error, response, body) => {
            if (error) {
                errorCb(error);
            }
            else {
                // After you receive token call success callback successCb()
                // parse body and get token
                let token: string = JSON.parse(body)['access_token'];
                this.dal.updateDocumentByFilter<IUserModel>(User, {'publicDetails.username': username}, {'privateDetails.token': token},
                    errorCb,
                    () => {
                        successCb(token);
                    });
            }
        });

    }

    getDataFromInstagram(token: string, errorCb: (err: any) => void, successCb: (data: any) => void) {
        let data: any = {};
        let requests = 0;
        Instagram.INSTAGRAM_DATA_PATHS.forEach((path: string) => {
            requests ++;
            this.getSpecificDataFromInstagram(path, data, token,
                (err: any) => {
                    requests--;
                    if(requests == 0) successCb(data);
                },
                (data: any) => {
                    requests--;
                    if(requests == 0) successCb(data);
                });
        });
    }


    getSpecificDataFromInstagram(path: string, data: any, token: string, errorCb: (err: any) => void, successCb: (data: any) => void){
        let url: string = 'https://api.instagram.com/v1' + path + token;
        request(url, (error, response, body) => {
            if (error) {
                errorCb(error);
            }
            else {
                switch (path){
                    case Instagram.INSTAGRAM_USER_DATA:
                        console.log("USER "  + body);
                        data['user'] = JSON.parse(body)['data'];
                        break;
                    case Instagram.INSTAGRAM_USER_MEDIA:
                        data['media'] = JSON.parse(body)['data'];
                        console.log("MEDIA "  + body);
                        break;

                }
                successCb(data);
            }
        })
    }

}