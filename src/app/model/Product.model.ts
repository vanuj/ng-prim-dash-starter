export class Product {
    pid: string = '';
    name: string = '';
    price: number;
    photo: string = '';
    currency: string = '';
    features: Array<[string]>;
    stockAvailable: boolean;
}