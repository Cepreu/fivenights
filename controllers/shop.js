const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render("shop/product-list", {
            prods: products,
            pageTitle: "All Products",
            path: "/product-list"
        });
    });
};

exports.getProduct = (req, resp, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        resp.render('shop/product-detail', {
            pageTitle: product.title,
            path: "/product-list", 
            product: product});
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
        path: "/cart"
    });
};

exports.postCart = (req, resp, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    console.log(prodId);
    resp.redirect('/cart');
};

exports.getOrders = (req, resp, next) => {
    resp.render("shop/orders", {
        pageTitle: "Your Orders",
        path: "/orders"
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

