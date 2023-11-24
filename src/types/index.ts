export type Character = {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    family: string;
    image: string;
    imageUrl: string;
};

export type APICharacter = Character & { continentName: string };

export type Continent = {
    id: number;
    name: string;
};

export type ContinentDict = { [key: number]: string };
