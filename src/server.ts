import { app } from "./app";

const PORT: number = parseInt(process.env.PORT as string) | 3000;

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
