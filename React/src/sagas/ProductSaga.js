import * as constants from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import connectAPI from '../fetchAPI/connectAPI'
import cartAPI from '../fetchAPI/cartAPI'
import * as handleStorage from '../handleLocalStorage'
const user = handleStorage.getLocalStorage('user')
function* getListProduct(action) {
    try {
        let path = action.payload ? `/product-server/${action.payload.type}` : '/product-server'
        const res = yield cartAPI(constants.HTTP_GET, path, action.payload)
        yield put({
            type: constants.GET_PRODUCT_SUCCESS,
            payload: {
                listProduct: res.listProduct
            }
        })
        yield put({
            type: constants.GET_CART_REQUEST,
            payload: {
                id: user.account._id
            }
        })
    } catch (err) {
        yield put({
            type: constants.GET_PRODUCT_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* addListProduct(action) {
    try {
        yield connectAPI(constants.HTTP_POST, '/product-server', action.payload.formData)
        yield put({
            type: constants.ADD_PRODUCT_SUCCESS
        })
        yield put({
            type: constants.GET_PRODUCT_REQUEST,
        })
    } catch (err) {
        yield put({
            type: constants.ADD_PRODUCT_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* deleteListProduct(action) {
    try {
        yield connectAPI(constants.HTTP_DELETE, '/product-server/' + action.payload)
        yield put({
            type: constants.DELETE_PRODUCT_SUCCESS
        })
        yield put({
            type: constants.GET_PRODUCT_REQUEST
        })
        yield put({
            type: constants.GET_CART_REQUEST,
            payload: {
                id: user.account._id
            }
        })
    } catch (err) {
        yield put({
            type: constants.DELETE_PRODUCT_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* updateListProduct(action) {
    try {
        const path = '/product-server/' + action.payload.id
        yield connectAPI(constants.HTTP_PUT, path, action.payload.formData)
        yield put({
            type: constants.UPDATE_PRODUCT_SUCCESS
        })
        yield put({
            type: constants.GET_PRODUCT_REQUEST
        })
    } catch (err) {
        yield put({
            type: constants.UPDATE_PRODUCT_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}
export const sagaProduct = [
    takeEvery(constants.GET_PRODUCT_REQUEST, getListProduct),
    takeEvery(constants.ADD_PRODUCT_REQUEST, addListProduct),
    takeEvery(constants.DELETE_PRODUCT_REQUEST, deleteListProduct),
    takeEvery(constants.UPDATE_PRODUCT_REQUEST, updateListProduct)
]