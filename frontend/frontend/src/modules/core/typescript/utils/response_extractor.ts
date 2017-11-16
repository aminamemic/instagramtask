import {Response} from '@angular/http';

export class ResponseExtractor {

    public static headerExtractor(response: Response, header: string): any {
        return response.headers.get(header);
    }

    public static bodyExtractor(response: Response): any {
        return response.json();
    }

    public static dataExtractor(body: any): any {
        return body.data;
    }
}