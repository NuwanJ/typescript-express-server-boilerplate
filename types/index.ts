export enum Environment {
    DEV = "dev",
    STAGGING = "stagging",
    TEST = "test",
    PROD = "prod",
}

// Configuration ytpes
export interface IConfigType {
    ENV: Environment;
    PORT: number;
}
