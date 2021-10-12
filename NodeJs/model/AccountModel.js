const mongoose = require('mongoose')
const { model, Schema } = mongoose
let AccountSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id_cart: {
        type: Schema.Types.ObjectId,
        ref: 'cart'
    },
    role: {
        type: String,
        enum: ['User', 'Admin']
    }
})

module.exports = model('account', AccountSchema)