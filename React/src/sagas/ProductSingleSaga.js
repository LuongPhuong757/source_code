import * as constants from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import connectAPI from '../fetchAPI/connectAPI'
function* getOneProduct(action) {
    try {
        const path = '/product-item-server/'+action.payload.slug
        const res = yield connectAPI(constants.HTTP_GET, path)
        // console.log(res,'resssssssssssssss')
        yield put({
            type: constants.GET_ONE_SUCCESS,
            payload: {
                listProduct: res.product
            }
        })
    } catch (err) {
        yield put({
            type: constants.GET_ONE_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}


export const sagaOne = [
    takeEvery(constants.GET_ONE_REQUEST, getOneProduct)
]