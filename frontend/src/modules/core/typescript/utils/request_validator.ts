import {IHeaders} from "../abstract/request.interface";
import {SessionConfig} from "../config/session.config";

export class RequestValidator {

    static formatHeaders(headers: Array<IHeaders>): Array<IHeaders> {
        headers.forEach((header, index) => {
            if (header.headerKey === SessionConfig.HEADERS.AUTH_HEADER) {
                headers.splice(index, 1);
            }
        })
        return headers;
    }

}