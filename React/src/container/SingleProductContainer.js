import React, { useEffect } from 'react';
import SingleProduct from '../component/category/SingleProduct';
import * as actions from '../actions'
import { connect } from 'react-redux'
function SingleProductContainer(props) {
    useEffect(() => {
        props.initLoad({ slug: props.match.params.slug })
    }, [])
    return (
        <SingleProduct  {...props}/>
    );
}
const mapStateToProps = (state) => {
    return {
        singleProduct: state.singleProduct.singleProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (data) => {
            dispatch(actions.get_one_item(data))
        },
        add_cart: (data) => {
            dispatch(actions.add_list_cart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer);