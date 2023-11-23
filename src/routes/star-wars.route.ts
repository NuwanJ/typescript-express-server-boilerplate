import { Router } from "express";
import { getCharacters, getPlanets } from "../controllers/starwars.controller";

const router = Router();

router.get("/", (req, res) => {
    res.send({});
});

router.get("/characters", async (req, res) => {
    const characters = await getCharacters();
    res.send(characters);
});

router.get("/planets", async (req, res) => {
    const planets = await getPlanets();
    res.send(planets);
});

export default router;
