import {IRequestData} from "./request.interface";
import {IResponseCallback} from "./response.interface";
import {Subscription} from 'rxjs/Rx';
import {Response} from '@angular/http';


export interface IRestService {

    sendRequest(requestData: IRequestData, validatedResponseCallback: IResponseCallback): Subscription
}
