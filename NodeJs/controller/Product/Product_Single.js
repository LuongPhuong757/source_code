const Product = require('../../model/ProductModel')
exports.get_one = async (req, res) => {
    try {
        let slug = req.params.slug
        let product = await Product.findOne({ slug: slug })
        res.send({
            product
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}