import { all } from 'redux-saga/effects'
import { sagaCart } from './CartSagas'
import { sagaLogin } from './LoginSagas'
import { sagaProduct } from './ProductSaga'
import { sagaOne } from './ProductSingleSaga'
export default function* rootSaga() {
    yield all([
        ...sagaProduct,
        ...sagaCart,
        ...sagaOne,
        ...sagaLogin
    ])
}