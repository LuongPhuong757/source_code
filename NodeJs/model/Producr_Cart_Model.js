const mongoose = require('mongoose')
const { model, Schema } = mongoose
let ProductCartModel = new Schema({
    quantily: {
        type: String
    },
    id_product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    id_cart: {
        type: Schema.Types.ObjectId,
        ref: 'cart'
    }

})

module.exports = model('product_cart', ProductCartModel)