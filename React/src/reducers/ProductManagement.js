import * as constants from '../constants'
const DEFAULT_STATE = {
    error: false,
    messageError: '',
    isLoading: false,
    listProduct: [],
    isAdd: false,
    isUpdate: false,
    productUpdate: null
}

function ProductManagement (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case constants.PROCESS_ADD:
            return {
                ...state,
                isAdd: true,
                isUpdate: false,
                productUpdate: ''
            }
        case constants.PROCESS_UPDATE:
            return {
                ...state,
                isAdd: true,
                isUpdate: true,
                productUpdate: action.payload
            }
        case constants.PROCESS_CLOSE_FORM:
            return {
                ...state,
                isAdd: false,
                isUpdate: false
            }
        case constants.UPDATE_PRODUCT_REQUEST:
        case constants.DELETE_PRODUCT_REQUEST:
        case constants.GET_PRODUCT_REQUEST:
        case constants.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case constants.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                listProduct: action.payload.listProduct
            }
        case constants.UPDATE_PRODUCT_SUCCESS:
        case constants.DELETE_PRODUCT_SUCCESS:
        case constants.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAdd: false,
            }
        case constants.UPDATE_PRODUCT_FAILURE:
        case constants.DELETE_PRODUCT_FAILURE:
        case constants.GET_PRODUCT_FAILURE:
        case constants.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: true,
                messageError: action.payload.message
            }
        default:
            return {
                ...state
            }
    }
}

export default ProductManagement