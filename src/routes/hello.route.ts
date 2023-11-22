import { Router } from "express";
import { helloWorld } from "../controllers/hello.controller";

const router = Router();

router.get("/", (req, res) => {
    res.send({});
});

router.get("/world", (req, res) => {
    const greeting: string = helloWorld();
    res.send({ msg: greeting });
});

router.get("/name/:name", (req, res) => {
    const { name } = req.params;
    res.send({ msg: `Hello ${name}` });
});

export default router;
