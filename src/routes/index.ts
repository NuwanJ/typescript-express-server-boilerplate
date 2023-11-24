import express, { Request, Response, NextFunction } from "express";
import characterContinentRoutes from "./character-continent.routes";

const router = express.Router();

router.use("/character-continent", characterContinentRoutes);

// Default route
export function defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(404);
}

export default router;
