export interface Environment {
    name: string;
    protocol: string;
    host: string;
    port: number;
    database?: string;
    logLevel?: string;
}

