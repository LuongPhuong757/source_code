import React from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux'
import LoginComponent from '../component/login/LoginComponent';

function LoginContainer(props) {
    return (
        <LoginComponent {...props} />
    );
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        regester_account: (data) => {
            dispatch(actions.regester_account(data))
        },
        login_account: (data) => {
            dispatch(actions.login_account(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);