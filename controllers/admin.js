const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.getProducts = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render("admin/products", {
            prods: products,
            pageTitle: "Products",
            path: "/admin/products"
        });
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const descr = req.body.description;
    const price = req.body.price;
    const image = req.body.imageUrl;
    const product = new Product(title, image, descr, price);
    product.save();
    res.redirect("/");
};