import { Router, Request, Response } from "express";
import { helloWorld } from "../controllers/hello.controller";
import { body, param, query, validationResult } from "express-validator";

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

// Validation Example
router.post(
    "/:version/register",
    [
        body("username")
            .isLength({ min: 5 })
            .withMessage("Username must be at least 5 characters long"),
        body("email").isEmail().withMessage("Invalid email"),
        body("password")
            .isLength({ min: 5 })
            .withMessage("Username must be at least 5 characters long"),
        query("udid").optional().isBoolean(),
        param("version").isIn(["v1", "v2"]),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;
        const { udid } = req.query;
        const { version } = req.params;

        // Perform operations with validated data, e.g., save to database
        console.log(username, password, email, udid, version);

        res.status(200).json({ message: "User registered successfully" });
    }
);

export default router;
