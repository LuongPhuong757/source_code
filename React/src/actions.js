import * as constants from './constants'
export const process_add = () => {
    return {
        type: constants.PROCESS_ADD
    }
}

export const process_update = (data) => {
    return {
        type: constants.PROCESS_UPDATE,
        payload: data
    }
}

export const process_close_form = () => {
    return {
        type: constants.PROCESS_CLOSE_FORM
    }
}

export const get_list_product = (data) => {
    return {
        type: constants.GET_PRODUCT_REQUEST,
        payload : data
    }
}

export const add_list_product = (data) => {
    return {
        type: constants.ADD_PRODUCT_REQUEST,
        payload: data
    }
}

export const delete_list_product = (id) => {
    return {
        type: constants.DELETE_PRODUCT_REQUEST,
        payload: id
    }
}

export const update_list_product = (data) => {
    return {
        type: constants.UPDATE_PRODUCT_REQUEST,
        payload: data
    }
}

export const get_list_cart = (data) => {
    return {
        type: constants.GET_CART_REQUEST,
        payload: data
    }
}

export const add_list_cart = (data) => {
    return {
        type: constants.ADD_CART_REQUEST,
        payload: data
    }
}

export const delete_list_cart = (id) => {
    return {
        type: constants.DELETE_CART_REQUEST,
        payload: id
    }
}

export const update_list_cart = (data) => {
    return {
        type: constants.UPDATE_CART_REQUEST,
        payload: data
    }
}

export const get_one_item = (data) => {
    return {
        type: constants.GET_ONE_REQUEST,
        payload: data
    }
}

export const regester_account = (data) => {
    return {
        type: constants.REGESTER_REQUEST,
        payload: data
    }
}

export const login_account = (data) => {
    return {
        type: constants.LOGIN_REQUEST,
        payload: data
    }
}