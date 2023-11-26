import dotenv from "dotenv";
import { Environment, IConfigType } from "../../types";

// Loads environment variables from .env into process.env
dotenv.config();

const config: IConfigType = {
    ENV: (process.env.ENV as Environment) || Environment.DEV,
    PORT: parseInt(process.env.PORT as string) || 3000,
};

export default config;
