const { DOMAIN } = require('../../constants')
const Product = require('../../model/ProductModel')
const Cart = require('../../model/Cart_Account')
const ProductCart = require('../../model/Producr_Cart_Model')
exports.add_product = async (req, res) => {
    try {
        let file = req.file
        let { nameProduct, price, total, sex } = req.body
        console.log(req.body, '111111111111111111111')
        let dataProduct = new Product({
            nameProduct, price, total
        })
        if (sex === '1') {
            dataProduct.tag = 'MALE'
        } else {
            dataProduct.tag = 'FEMALE'
        }
        dataProduct.image = DOMAIN + file.filename
        let saveProduct = await dataProduct.save()
        res.send({
            saveProduct
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

exports.get_product = async (req, res) => {
    try {
        let { id } = req.params // id là Female hoặc male
        console.log('ok')
        let listProduct = []
        if (!id) {
            listProduct = await Product.find({})
        } else {
            listProduct = id === '1' ? await Product.find({ tag: 'FEMALE' }) : await Product.find({ tag: 'MALE' });
        }
        res.send({
            listProduct
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

exports.delete_product = async (req, res) => {
    try {
        let id = req.params.id
        let product = await Product.findById(id)
        let list_product_cart = await ProductCart.find({ id_product: id })
        if (list_product_cart) {
            for (let i = 0; i < list_product_cart.length; i++) {
                let cart = await Cart.findById(list_product_cart[i].id_cart)
                if (cart) {
                    for (let j = 0; j < cart.products.length; j++) {
                        if (cart.products[j].toString() === list_product_cart[i]._id.toString()) {
                            cart.products.splice(j, 1);
                            await cart.save()
                        }
                    }
                }
                await list_product_cart[i].delete()
            }
        }
        await product.delete();
        res.send({
            message: 'Success 4'
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

exports.update_product = async (req, res) => {
    try {
        let id = req.params.id
        let product = await Product.findById(id)
        let file = req.file
        let { nameProduct, price, total, sex } = req.body
        console.log(req.body, '11111111111')
        product.image = file ? DOMAIN + file.filename : product.image
        product.price = price
        product.total = total
        product.nameProduct = nameProduct
        if (sex === '1') {
            product.tag = 'MALE'
        } else {
            product.tag = 'FEMALE'
        }
        let saveProduct = await product.save()
        res.send({
            saveProduct
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}