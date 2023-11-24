import { app } from "./app";

const PORT: number = 8000;

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
