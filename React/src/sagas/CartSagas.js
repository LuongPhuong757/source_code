import * as constants from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import cartAPI from '../fetchAPI/cartAPI'
function* getListProduct(action) {
    try {
        console.log(action.payload, 'payloaddddddddđ')
        const res = yield cartAPI(constants.HTTP_GET, '/cart-server/' + action.payload.id)
        console.log(res, 'ressSSSSSSSSSSSSSSSSS')
        yield put({
            type: constants.GET_CART_SUCCESS,
            payload: {
                listProduct: res.listProduct
            }
        })
    } catch (err) {
        yield put({
            type: constants.GET_CART_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* addListCart(action) {
    try {
        const res = yield cartAPI(constants.HTTP_POST, '/cart-server', action.payload)
        if (res.message === 'WRONG') {
            alert('San pham da het hang');
            throw new Error('ADD WRONG')
        }
        yield put({
            type: constants.ADD_CART_SUCCESS
        })
        yield put({
            type: constants.GET_CART_REQUEST,
            payload: {
                id: action.payload.id
            }
        })
    } catch (err) {
        yield put({
            type: constants.ADD_CART_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* deleteListProduct(action) {
    try {
        yield cartAPI(constants.HTTP_DELETE, '/cart-server/' + action.payload.id_cart)
        yield put({
            type: constants.DELETE_CART_SUCCESS
        })
        yield put({
            type: constants.GET_CART_REQUEST,
            payload: {
                id: action.payload.id
            }
        })
    } catch (err) {
        yield put({
            type: constants.DELETE_CART_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* updateListProduct(action) {
    try {
        const path = '/cart-server/' + action.payload.id_cart
        yield cartAPI(constants.HTTP_PUT, path, { type: action.payload.type })
        yield put({
            type: constants.UPDATE_CART_SUCCESS
        })
        yield put({
            type: constants.GET_CART_REQUEST,
            payload: {
                id: action.payload.id
            }
        })
    } catch (err) {
        yield put({
            type: constants.UPDATE_CART_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}
export const sagaCart = [
    takeEvery(constants.GET_CART_REQUEST, getListProduct),
    takeEvery(constants.ADD_CART_REQUEST, addListCart),
    takeEvery(constants.DELETE_CART_REQUEST, deleteListProduct),
    takeEvery(constants.UPDATE_CART_REQUEST, updateListProduct)
]