const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
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

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/');
    }
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode
    });
};
