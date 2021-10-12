import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import Trend from '../component/homePage/Trend';
import TopProduct from '../component/homePage/TopProduct';
import Fashion from '../component/homePage/Fashion';
import ListProduct from '../component/homePage/ListProduct';
import News from '../component/homePage/News';
import Banner from '../component/homePage/Banner';


function HomePageContainer(props) {
    useEffect(() => {
        props.initLoad()
    }, [])
    return (
        <div>
            <Banner />
            <Trend />
            <TopProduct />
            <Fashion />
            <ListProduct {...props}/>
            <News />
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
        initLoad: () => {
            dispatch(actions.get_list_product())
        },
        add_cart: (data) => {
            dispatch(actions.add_list_cart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);