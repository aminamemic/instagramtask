import {Injectable} from '@angular/core';
import {Http, Request, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {URLException} from '../exceptions/url.exception';
import {IRestService} from "../abstract/rest_service.interface";
import {IResponseCallback} from "../abstract/response.interface";
import {EndPoints} from "../config/endpoints.config";
import {IHttpConfig} from "../abstract/request.interface";
import {IEndPoint} from "../abstract/endpoints.interface";
import {SessionService} from "./session.service";
import {SessionConfig} from "../config/session.config";
import {CoreUtils} from "../utils/core_utils";
import {RequestValidator} from "../utils/request_validator";
import {ResponseValidatorService} from "./response_validator.service";


@Injectable()
export class RestService implements IRestService {

    constructor(private http: Http, private sessionService: SessionService,  private responseValidator: ResponseValidatorService, private router: Router) {

    }

    private redirectUrl: string;

    private generateURL(httpConfig: IHttpConfig): string {
        let endpoint: IEndPoint;
        let url: string;
        if (httpConfig.hasOwnProperty('endpoint')) {
            endpoint = EndPoints[httpConfig.endpoint];
            if (httpConfig.requestData.hasOwnProperty('path')) {
                if (httpConfig.requestData.hasOwnProperty('extendPath')) {
                    url = CoreUtils.format("{0}://{1}:{2}{3}/{4}/{5}", [endpoint.protocol, endpoint.host, endpoint.port, endpoint.path, httpConfig.requestData.path, httpConfig.requestData.extendPath]);
                    return url;
                }
                else {
                    url = CoreUtils.format("{0}://{1}:{2}{3}/{4}", [endpoint.protocol, endpoint.host, endpoint.port, endpoint.path, httpConfig.requestData.path]);
                    return url;
                }
            }
            else {
                throw new URLException("Provide full path")
            }
        }
        else {
            throw new URLException("Provide Endpoint HTTP config")
        }

    }


    private generateRequest(httpConfig: IHttpConfig): Request {
        let requestOptionsArgs: RequestOptionsArgs = {};
        requestOptionsArgs.url = this.generateURL(httpConfig);
        if (httpConfig.requestData.hasOwnProperty('method')) {
            requestOptionsArgs.method = httpConfig.requestData.method;
        }
        if (httpConfig.requestData.hasOwnProperty('search')) {
            let searchParams: URLSearchParams = new URLSearchParams();
            searchParams.set(httpConfig.requestData.search[0], httpConfig.requestData.search[1]);
            requestOptionsArgs.search = searchParams;
        }
        if (httpConfig.requestData.hasOwnProperty('headers')) {
            let headers: Headers = new Headers();
            httpConfig.requestData.headers.forEach((key, index) => {
                headers.append(httpConfig.requestData.headers[index].headerKey, httpConfig.requestData.headers[index].headerValue);
            });
            requestOptionsArgs.headers = headers;
        }
        if (httpConfig.requestData.hasOwnProperty('body')) {
            requestOptionsArgs.body = httpConfig.requestData.body;
        }
        return new Request(new RequestOptions(new RequestOptions({}).merge(requestOptionsArgs)));


    }


    public sendRequest(httpConfig: IHttpConfig, validatedResponseCallback: IResponseCallback): Subscription {
        if (httpConfig.access === 'PUBLIC') {
            let requestPrepared: Request = this.generateRequest(httpConfig);
            return this.http.request(requestPrepared).subscribe(res => this.responseValidator.validateResponse(res, validatedResponseCallback),
                res => this.responseValidator.validateResponse(res, validatedResponseCallback));
        }
        else {
            let authHeader = this.sessionService.getSession();
            if (authHeader) {
                RequestValidator.formatHeaders(httpConfig.requestData.headers);
                httpConfig.requestData.headers.push({headerKey: SessionConfig.HEADERS.AUTH_HEADER, headerValue: authHeader});
                let requestPrepared: Request = this.generateRequest(httpConfig);
                return this.http.request(requestPrepared).subscribe(res => this.responseValidator.validateResponse(res, validatedResponseCallback),
                    res => this.responseValidator.validateResponse(res, validatedResponseCallback));
            }
            else {
                /***
                 NO TOKEN
                 Redirect to Sign In
                 ***/
                this.router.navigate(['/login']);
            }
        }
    }
}
