const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const { model, Schema } = mongoose
let ProductSchema = new Schema({
    nameProduct: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    tag: {
        type: String
    },
    image: {
        type: String
    },
    bought: {
        type: String
    },
    product_cart: {
        type: String
    },
    slug: { type: String, slug: "nameProduct", unique: true }
})

module.exports = model('product', ProductSchema)