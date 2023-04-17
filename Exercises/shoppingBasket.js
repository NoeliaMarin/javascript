class ShoppingBasket {
    constructor() {
        this.basket = [];
    }

    getTotalPrice() {
        let arrayPrices = this.basket.map(item => item.getPrice());
        let sum = 0
        arrayPrices.forEach((numbers) => {
            sum += numbers
        })
        return sum;
    };

    addItem(item) {
       return this.basket.push(item);
    };
};

module.exports = ShoppingBasket;

// const ShoppingBasket = require('./shoppingBasket');

