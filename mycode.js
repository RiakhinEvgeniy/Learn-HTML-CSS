class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

let banan = new Product("Banan", 100);
let apple = new Product("Apple", 250);
let tomate = new Product("Tomate", 120);

console.log(banan.getName());
console.log(banan.getPrice());
console.log(apple.getName());
console.log(apple.getPrice());
console.log(tomate.getName());