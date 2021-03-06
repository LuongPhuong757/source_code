const express = require('express')
const Routes = express.Router()
const handleProduct = require('./ProductRoutes')
const handleProductCart = require('./Product_Cart_Routes')
const handleAccount = require('./AccountRoutes')
const todoList = require('../controller/Product/Product_Single')
Routes.get('/product-item-server/:slug', todoList.get_one)
Routes.use('/product-server', handleProduct)
Routes.use('/cart-server', handleProductCart)
Routes.use('/account-server', handleAccount)
module.exports = Routes