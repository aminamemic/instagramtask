import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router'
import {SessionService} from "./session.service";
import {IResponseCallback} from "../abstract/response.interface";


@Injectable()
export class ResponseValidatorService {

    constructor(private sessionService: SessionService, private router: Router) {}

    public validateResponse(res: Response, validatedResponseCallback: IResponseCallback) {
        let responseCode = res.status;
        switch (responseCode) {
            case 200:
                validatedResponseCallback(false, res);
                break;
            case 500:
                validatedResponseCallback(true, responseCode);
                break;
            case 401:
                this.sessionService.deleteSession();
                this.router.navigate(['/login']);
                validatedResponseCallback(true, responseCode);
                break;
            case 403:
                this.sessionService.deleteSession();
                this.router.navigate(['/login']);
                validatedResponseCallback(true, responseCode);
                break;

        }
    }

}
