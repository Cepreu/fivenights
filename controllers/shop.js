const Product = require('../models/product');

exports.getProducts = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render("shop/product-list", {
            prods: products,
            pageTitle: "All Products",
            path: "/shop/product-list"
        });
    });
};

exports.getIndex = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render("shop/index", {
            prods: products,
            pageTitle: "Shop",
            path: "/"
        });
    });
};

exports.getCart = (req, resp, next) => {
    resp.render("shop/cart", {
        pageTitle: "Your Cart",
        path: "/shop/cart"
    });
};

exports.getOrders = (req, resp, next) => {
    resp.render("shop/orders", {
        pageTitle: "Your Orders",
        path: "/shop/orders"
    });
};

exports.getCheckout = (req, resp, next) => {
    resp.render("shop/checkout", {
        pageTitle: "Checkout",
        path: "/checkout"
    });
};

exports.postW2C = (req, resp, next) => {
    resp.render('w2c', {
        pageTitle: 'Web-To Campaign',
        path: '/web2campaign',
        formCSS: true,
        productCSS: true,
        activeW2C: true
    });
};

