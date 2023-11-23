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

export type Planet = {
    climate: string;
    created: string;
    diameter: number;
    edited: string;
    films: string[];
    gravity: number;
    name: string;
    orbital_period: number;
    population: number;
    residents: string[];
    rotation_period: number;
    surface_water: number;
    terrain: string;
    url: string;
};

export type CharacterResponse = {
    count: number;
    next?: string;
    previous?: string;
    results: Character[];
};
export type PlanetResponse = {
    count: number;
    next?: string;
    previous?: string;
    results: Planet[];
};
