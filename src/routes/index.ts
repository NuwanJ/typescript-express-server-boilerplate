import express, { Request, Response, NextFunction } from "express";
import helloWorldRoutes from "./hello.route";

const router = express.Router();

router.get("/test", function (req, res) {
    res.send({ msg: "Hello world !" });
});

router.use("/hello", helloWorldRoutes);

// Custom error handler
export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
}

// Default route
export function defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(404);
}

export default router;
