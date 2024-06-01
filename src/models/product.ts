export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
    ) { }

    // mockdata for testing
    static getProducts: Product[] = [
        new Product(1, 'Macbook Pro', 2000),
        new Product(2, 'Iphone 12', 1000),
        new Product(3, 'Samsung Galaxy S21', 900),
        new Product(4, 'Google Pixel 5', 800)
    ];
}