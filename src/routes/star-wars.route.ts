import { Router } from "express";
import { getCharacters } from "../controllers/starwars.controller";
import { Character, CharacterResponse } from "../types/star-war.types";

const router = Router();

router.get("/", (req, res) => {
    res.send({});
});

router.get("/characters", async (req, res) => {
    const characters = await getCharacters();
    res.send(characters);
});

export default router;
