import React, { useEffect } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import * as handleStorage from '../handleLocalStorage'
import {
    Link
} from "react-router-dom";
function Header(props) {
    const user = handleStorage.getLocalStorage('user')
    useEffect(() => {
        props.initLoad({ id: user ? user.account._id : '' })
    }, [])
    let lengthList = props.listProduct ? props.listProduct.length : 0
    return (
        <div>
            <div class="container-fluid header">
                <div class="row">
                    <div class="col-lg-12 p-0">
                        <nav class="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "rgb(233 232 232)" }}>
                            <a class="navbar-brand text-info" href="/">Eledevo Academy</a>
                            <div class="collapse navbar-collapse" id="collapsibleNavId">
                                <div class="btn-group ml-auto" role="group">
                                    <div class="cart_icon">
                                        <Link to='/cart' >
                                            <div class="rounded-circle icon_total">{lengthList}</div>
                                            <i class="fas fa-shopping-cart mr-4"></i>
                                        </Link>
                                    </div>
                                    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle bg-info" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {user ? user.account.userName : 'Account'}
                                    </button>
                                    <div class="dropdown-menu menu-none" aria-labelledby="btnGroupDrop1">
                                        <a class="dropdown-item" href="/">Profile</a>
                                        <a class="dropdown-item" href="/" onClick={() => {
                                            handleStorage.removeLocalStorage('user')
                                        }}>Đăng Xuất</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state, 'stateeeeeePROOOOOOOOOOO')
    return {
        listProduct: state.cartProduct.listProduct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (data) => {
            dispatch(actions.get_list_cart(data))
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);