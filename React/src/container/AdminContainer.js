import React, { useEffect } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux'
import AdminProduct from '../component/admin/AdminProduct'
import FormProcesser from '../component/admin/FormProcesser'
function AdminContainer(props) {
    useEffect(() => {
        props.initLoad()
    }, [])
    return (
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <FormProcesser {...props} />
                        <AdminProduct {...props} />
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        isAdd: state.productManagement.isAdd,
        isUpdate: state.productManagement.isUpdate,
        listProduct: state.productManagement.listProduct,
        productUpdate: state.productManagement.productUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.get_list_product())
        },
        process_add: () => {
            dispatch(actions.process_add())
        },
        process_close_form: () => {
            dispatch(actions.process_close_form())
        },
        add_list_product: (data) => {
            dispatch(actions.add_list_product(data))
        },
        delete_list_product: (id) => {
            dispatch(actions.delete_list_product(id))
        },
        process_update: (data) => {
            dispatch(actions.process_update(data))
        },
        update_list_product: (data) => {
            dispatch(actions.update_list_product(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);