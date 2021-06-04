class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

const product1 = new Product('Йогурт', 52);
product1.make25PercentDiscount();

console.log(product1);