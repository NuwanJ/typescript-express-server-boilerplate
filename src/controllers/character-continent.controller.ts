import { APIClient } from "../services/apiClient";
import { Character, Continent, ContinentDict } from "../types";

const apiClient = new APIClient("https://thronesapi.com/api/v2");

export async function listData(
    family: string | null = null,
    title: string | null = null,
    page: number = 1,
    size: number | undefined = undefined
): Promise<Character[]> {
    const characters = await getCharacters();
    const continents = await getContinents();

    const pageSize = size ? size : characters.length;
    const startIndex = size ? (page - 1) * pageSize : 0;
    console.log(startIndex, pageSize);

    return characters
        .filter((c) => {
            return family ? hasMatch(c.family, family) : true;
        })
        .filter((c) => {
            return title ? hasMatch(c.title, title) : true;
        })
        .map((char) => {
            const id: number = char.id;
            let charContinent: number = 0;

            if (id == 0) {
                charContinent = 0;
            } else if (id % 3 == 0 && id % 5 == 0) {
                charContinent = 3;
            } else if (id % 3 == 0 || id % 5 == 0) {
                charContinent = 2;
            } else if (id % 2 == 1) {
                charContinent = 1;
            }
            return { ...char, continentName: continents[charContinent] };
        })
        .slice(startIndex, pageSize);
}

export async function getCharacters(): Promise<Character[]> {
    const characters = <Character[]>await apiClient.get("Characters");

    return characters;
}

export async function getContinents(): Promise<ContinentDict> {
    const continents = <Continent[]>await apiClient.get("Continents");
    const continentDict: ContinentDict = {};

    continents.forEach((c) => {
        continentDict[c.id] = c.name;
    });

    return continentDict;
}

function hasMatch(text: string, pattern: string): boolean {
    const regex: RegExp = new RegExp(pattern, "i");
    return regex.test(text);
}
