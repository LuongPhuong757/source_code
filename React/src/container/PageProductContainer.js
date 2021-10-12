import React, { useEffect } from 'react';
import PageProduct from '../component/category/PageProduct';
import PageProductNews from '../component/category/PageProductNews';
import { connect } from 'react-redux'
import * as actions from '../actions'
function PageProductContainer(props) {
    useEffect(() => {
        console.log(props, '000000000000000')
        console.log(props.match.params.type === 'male', 'aaaaaaaaaaaaaaa')
        if (props.match.params.type === 'male') {
            props.initLoad({ type: 0 })
        } else {
            props.initLoad({ type: 1 })
        }
    }, [props.match.params])
    return (
        <div>
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-3">
                        <div>
                            <h6 class="pb-5" style={{ fontWeight: 'bold', color: 'rgb(175 169 169)' }}>TRANG CHỦ /
                                <span style={{ color: 'black' }}> ĐỒNG HỒ NAM</span></h6>
                        </div>
                        <PageProductNews />
                    </div>
                    <PageProduct {...props} />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        listProduct: state.productManagement.listProduct,
        // isAddCart: state.cartProduct.isAddCart,
        // isLoading: state.productManagement.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (data) => {
            dispatch(actions.get_list_product(data))
        },
        add_cart: (data) => {
            dispatch(actions.add_list_cart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageProductContainer);