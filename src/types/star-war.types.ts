export type Character = {
    name: string;
    height: number;
    mass: number;
    gender: "male" | "female";
    homeworld: string;
    films: string[];
    species: [];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
};

export type CharacterResponse = {
    count: number;
    next: string | null;
    results: Character[];
};
