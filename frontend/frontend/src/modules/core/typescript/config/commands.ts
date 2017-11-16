export interface IEmitter{
    command: string,
    data?: any,
}

export class Commands {
   static RELOAD_SEARCH: string = "RELOAD_SEARCH";
}