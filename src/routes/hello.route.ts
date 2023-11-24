import { Router, Request, Response } from "express";
import { helloWorld } from "../controllers/hello.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({});
});

router.get("/world", (req: Request, res: Response) => {
    const greeting: string = helloWorld();
    res.send({ msg: greeting });
});

router.get("/name/:name", (req: Request, res: Response) => {
    const { name } = req.params;
    res.send({ msg: `Hello ${name}` });
});

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

router.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

router.get("/users/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
});

export default router;
