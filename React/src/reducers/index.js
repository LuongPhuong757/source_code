import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import LoginReducers from './LoginReducers'
import ProductManagement from './ProductManagement'
import ProductSingleReducer from './ProductSingleReducer'
const rootReducer = combineReducers({
    productManagement: ProductManagement,
    cartProduct: CartReducer,
    singleProduct : ProductSingleReducer,
    login : LoginReducers
})

export default rootReducer