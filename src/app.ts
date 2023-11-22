import express from "express";
import * as bodyParser from "body-parser";
import appLogger from "./middlewares/logger";
import router, { defaultRoute, errorHandler } from "./routes/";
import cors from "cors";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(appLogger);
app.use("/", router);
app.use(defaultRoute); // default route has to be last route
app.use(errorHandler); // Error handler goes last
