const express = require('express')
const Routes = express.Router()
const todoList = require('../controller/Product/Product_Cart_Controller')
const middleware = require('../middleware/middleware_role/verify_role')
Routes.route('/')
    .post(todoList.add_product)
Routes.route('/:id')
    .delete(todoList.delete_product)
    .put(todoList.update_product)
    .get(todoList.get_product)
module.exports = Routes
