function Product(name, price) {
    this.name = name;
    this.price = price;
 }

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};

const product1 = new Product('Йогурт', 52);
product1.make25PercentDiscount();

console.log(product1);
    