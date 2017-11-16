import {ISession} from "./session.interface";
import {SessionConfig} from "../config/session.config";

export abstract class AbstractSession implements ISession {

    setSession(value: string): void {
        sessionStorage.setItem(SessionConfig.HEADERS.AUTH_HEADER, value);
    }

    getSession(): string {
        return sessionStorage.getItem(SessionConfig.HEADERS.AUTH_HEADER);
    }

    deleteSession(): void {
        sessionStorage.removeItem(SessionConfig.HEADERS.AUTH_HEADER);
    }

    getUserData(): string {
        return JSON.parse(localStorage.getItem(SessionConfig.HEADERS.AUTH_USER));
    }

    setUserData(value: string) {
        localStorage.setItem(SessionConfig.HEADERS.AUTH_USER, value);
    }

    deleteUserData(): void {
        localStorage.removeItem(SessionConfig.HEADERS.AUTH_USER);
    }


}