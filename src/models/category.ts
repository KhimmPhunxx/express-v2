export class Category {
    constructor(
        public id: number,
        public name: string
    ) { }

    // mockdata for testing
    static getCategories: Category[] = [
        new Category(1, 'Electronics'),
        new Category(2, 'Clothing'),
        new Category(3, 'Shoes'),
        new Category(4, 'Books')
    ];
}