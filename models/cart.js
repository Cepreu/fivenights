const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            //Analyze the cart - Find if the product already exists
            const existingProductindex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductindex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct};
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductindex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
        this.products = [];
        this.totalPrice = 0;
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {return;}
            const updatedCart = {...fileContent};
            const product = updatedCart.products.find(prod => prod.id === id);
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);

            const productQty = product.qty;
            updatedCart.totalPrice -= productPrice * productQty;

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });       
    }
}