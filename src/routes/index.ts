import express, { Request, Response, NextFunction } from "express";
import helloWorldRoutes from "./hello.route";

const router = express.Router();

router.get("/test", function (req, res) {
    res.send({ msg: "Hello world !" });
});

router.use("/hello", helloWorldRoutes);

// Default route
export function defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(404);
}

export default router;
