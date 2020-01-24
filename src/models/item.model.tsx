export interface Item {
    id: number;
    name: string;
    image: string;
    price: {
        amount: number;
        currency: string;
        measureUnit: string;
    };
}
