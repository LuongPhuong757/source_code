import * as constants from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import cartAPI from '../fetchAPI/cartAPI'
import * as handleStorage from '../handleLocalStorage'
function* resgesterAccount(action) {
    try {
        const path = '/account-server/regester'
        const res = yield cartAPI(constants.HTTP_POST, path, action.payload)
        if (res.message === 'Account Not Exist') {
            alert("Tai khoan da ton tai")
            throw new Error("Regester Wrong")
        }
        yield put({
            type: constants.REGESTER_SUCCESS,
            payload: {
                listProduct: res.listProduct
            }
        })
    } catch (err) {
        yield put({
            type: constants.REGESTER_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}

function* loginAccount(action) {
    try {
        const path = '/account-server/login'
        const res = yield cartAPI(constants.HTTP_POST, path, action.payload)
        if (res.message) {
            res.message === 'Account wrong' ? alert('Tai khoan khong ton tai') : alert('Password khong dung')
            throw new Error('Login Wrong')
        }
        handleStorage.setLocalStorage('user', JSON.stringify(res))
        yield put({
            type: constants.LOGIN_SUCCESS,
            payload: {
                listProduct: res.listProduct
            }
        })
        window.location.reload()
    } catch (err) {
        yield put({
            type: constants.LOGIN_FAILURE,
            payload: {
                message: err.message
            }
        })
    }
}
export const sagaLogin = [
    takeEvery(constants.REGESTER_REQUEST, resgesterAccount),
    takeEvery(constants.LOGIN_REQUEST, loginAccount)
]