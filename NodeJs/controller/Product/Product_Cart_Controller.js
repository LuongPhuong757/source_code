const ProductCart = require('../../model/Producr_Cart_Model')
const Product = require('../../model/ProductModel')
const Cart = require('../../model/Cart_Account')
exports.add_product = async (req, res) => {
    try {
        let { id_product, id_cart } = req.body
        let findCart = await ProductCart.find({ id_product: id_product, id_cart: id_cart })
        console.log(findCart, '1233333333333333333333')
        let findProduct = await Product.findById(id_product);
        if (parseInt(findProduct.total) <= 0) {
            return res.send({
                message: 'WRONG'
            })
        }
        findProduct.total--
        await findProduct.save()
        if (findCart[0]) {
            // console.log(findCart, '12333333333333333333334')
            findCart[0].quantily++
            await findCart[0].save()
        } else {
            let dataProduct = new ProductCart({
                id_product: id_product,
                id_cart: id_cart
            })
            dataProduct.quantily = 1
            let saveProduct = await dataProduct.save()
            let findCart = await Cart.findById(id_cart)
            findCart.products.push(saveProduct._id)
            await findCart.save()
        }
        res.send({
            message: 'Successs 1'
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

exports.get_product = async (req, res) => {
    try {
        let { id } = req.params
        // console.log(req.params.id)
        let cart = await Cart.findOne({ id_account: id }).populate({ path: 'products', populate: { path: 'id_product' } })
        // console.log(cart,'123')
        res.send({
            listProduct: cart.products
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
        let product = await ProductCart.findById(id)
        let findProduct = await Product.findById(product.id_product)
        findProduct.total = parseInt(findProduct.total) + parseInt(product.quantily)
        console.log(findProduct.total)
        await findProduct.save()
        await product.delete()
        res.send({
            message: 'Success 2'
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
        let { type } = req.body
        let product = await ProductCart.findById(id)
        if (type === 0) {
            if (product.quantily <= 1) {
                await product.delete()
                return res.send({
                    message: 'Success 3'
                })
            }
            product.quantily--
        } else {
            product.quantily++
        }
        await product.save()
        res.send({
            saveProduct
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}