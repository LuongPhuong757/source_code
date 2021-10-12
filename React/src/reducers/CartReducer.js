import * as constants from '../constants'
const DEFAULT_STATE = {
    error: false,
    messageError: '',
    isLoading: false,
    listProduct: [],
    isAddCart: false
}

function CartReducers (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case constants.UPDATE_CART_REQUEST:
        case constants.DELETE_CART_REQUEST:
        case constants.GET_CART_REQUEST:
        case constants.ADD_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAddCart: false
            }
        case constants.GET_CART_SUCCESS:
            // console.log(action.payload, 'accccccccccccs')
            return {
                ...state,
                listProduct: action.payload.listProduct,
                isAddCart: true
            }
        case constants.UPDATE_CART_SUCCESS:
        case constants.DELETE_CART_SUCCESS:
        case constants.ADD_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAddCart: false
            }
        case constants.UPDATE_CART_FAILURE:
        case constants.DELETE_CART_FAILURE:
        case constants.GET_CART_FAILURE:
        case constants.ADD_CART_FAILURE:
            return {
                ...state,
                error: true,
                messageError: action.payload.message,
                isAddCart: false
            }
        default:
            return {
                ...state
            }
    }
}

export default CartReducers