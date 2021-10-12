const mongoose = require('mongoose')
const { model, Schema } = mongoose
let CartSchema = new Schema({
    id_account: {
        type: Schema.Types.ObjectId,
        ref: 'account'
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product_cart'
        }
    ]
})

module.exports = model('cart', CartSchema)