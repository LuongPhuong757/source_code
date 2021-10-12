import React, { useEffect } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux'
import Cart from '../component/category/Cart';
import * as handleStorage from '../handleLocalStorage'
function CartContainer(props) {
    const user = handleStorage.getLocalStorage('user')
    useEffect(() => {
        props.initLoad({ id: user ? user.account._id : '' })
    }, [])
    return (
        <Cart {...props} />
    );
}
const mapStateToProps = (state) => {
    return {
        listProduct: state.cartProduct.listProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete_cart: (id) => {
            dispatch(actions.delete_list_cart(id))
        },
        update_cart: (data) => {
            dispatch(actions.update_list_cart(data))
        },
        initLoad: (data) => {
            dispatch(actions.get_list_cart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);