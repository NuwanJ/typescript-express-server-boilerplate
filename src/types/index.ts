type car = {
    type: string;
    model: string;
    number: number;
    drivers: { [index: string]: number };
    passengers?: Record<string, number>;
    manufacturer: CarManufacturers;
};

export enum CarManufacturers {
    TOYOTA,
    NISSAN,
    BMW,
    TESLA,
}

const myCar: car = {
    type: "",
    model: "",
    manufacturer: CarManufacturers.BMW,
    drivers: {
        nuwan: 12,
    },
    number: 0,
    passengers: {
        hansika: 10,
    },
};
