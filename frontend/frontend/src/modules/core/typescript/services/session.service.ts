import {Injectable} from '@angular/core';
import {AbstractSession} from "../abstract/session.abstract";


@Injectable()
export class SessionService extends AbstractSession {

    constructor() {
        super()
    }

    getUserId(): string {
        return super.getUserData()['userId'];
    }

}