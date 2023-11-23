import { APIClient } from "../services/apiClient";
import { Character, CharacterResponse, Planet, PlanetResponse } from "../types/star-war.types";

const apiClient = new APIClient("https://swapi.dev/api/");

export async function getCharacters() {
    let allCharactes: Character[] = [];
    let nextPage = "people";

    while (nextPage) {
        console.log("Characters:", nextPage);
        const data = <CharacterResponse>await apiClient.get(nextPage);
        allCharactes.push(...data.results);
        nextPage = data.next != null ? data.next.replace("https://swapi.dev/api/", "") : null;
    }

    return allCharactes;
}

export async function getPlanets() {
    let allPlanets: Planet[] = [];
    let nextPage = "planets";

    while (nextPage) {
        console.log("Planets:", nextPage);
        const data = <PlanetResponse>await apiClient.get(nextPage);
        allPlanets.push(...data.results);
        nextPage = data.next != null ? data.next.replace("https://swapi.dev/api/", "") : null;
    }

    return allPlanets;
}
