import { Environment } from "../types";
import { app } from "./app";
import config from "./config";

const PORT = config.PORT;
const ENV = config.ENV;

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT} in ${ENV}`);
});
