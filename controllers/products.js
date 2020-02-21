const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.putAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render("shop", {
            prods: products,
            pageTitle: "Shop",
            path: "/",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
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

