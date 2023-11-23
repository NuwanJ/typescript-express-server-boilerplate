import { APIClient } from "../services/apiClient";
import { Character, CharacterResponse } from "../types/star-war.types";

const apiClient = new APIClient("https://swapi.dev/api/");

export async function getCharacters() {
    let allCharactes: Character[] = [];
    let nextPage = "people";

    while (nextPage) {
        console.log("Characters", nextPage);
        const data = <CharacterResponse>await apiClient.get(nextPage);
        allCharactes.push(...data.results);
        nextPage = data.next != null ? data.next.replace("https://swapi.dev/api/", "") : null;
    }

    return allCharactes;
}
