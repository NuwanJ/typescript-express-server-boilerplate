import { Router, Request, Response } from "express";
import { listData } from "../controllers/character-continent.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({});
});

router.get("/list", async (req: Request, res: Response) => {
    const { family, title, page, size } = req.query as { [key: string]: string };
    const list = await listData(family, title, parseInt(page), parseInt(size));

    res.send(list);
});

export default router;
