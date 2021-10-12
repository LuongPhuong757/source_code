import React, { useState } from 'react';

function LoginComponent(props) {
    const [isLogin, setIsLogin] = useState(true)
    const { regester_account, login_account } = props
    const openLogin = () => {
        setIsLogin(true)
    }
    const openRegester = () => {
        setIsLogin(false)
    }
    return (
        <div style={{ height: '100vh', display: 'flex' }}>
            {isLogin ? <ComponentLogin openRegester={openRegester} login_account={login_account} />
                : <ComponentRegester openLogin={openLogin} regester_account={regester_account} />}
        </div>
    );
}

function ComponentLogin(props) {
    const { openRegester, login_account } = props
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div class="card text-center login">
            <div class="card-header">
                <h2 class="card-title m-0 p-0">Login</h2>
            </div>
            <div class="card-body">
                <div class="list-input">
                    <p class="font-weight-bold float-left mb-2">UserName</p>
                    <input type="text" class="form-control mb-3" placeholder="VD: Phuong123" onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                    <p class="font-weight-bold float-left mb-2">Password</p>
                    <input type="text" class="form-control mb-3" placeholder="VD: 123456" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button type="button" class="btn btn-secondary mr-3" onClick={() => {
                        login_account({ userName, password })
                    }}>ĐĂNG NHẬP</button>
                    <button type="button" class="btn btn-info" onClick={openRegester}>ĐĂNG KÍ</button>
                </div>
            </div>
        </div>
    )
}


function ComponentRegester(props) {
    const { openLogin, regester_account } = props
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    return (
        <div class="card text-center login">
            <div class="card-header">
                <h2 class="card-title m-0 p-0">Regester</h2>
            </div>
            <div class="card-body">
                <div class="list-input">
                    <p class="font-weight-bold float-left mb-2">UserName</p>
                    <input type="text" class="form-control mb-3" placeholder="VD: Phuong123" onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                    <p class="font-weight-bold float-left mb-2">Password</p>
                    <input type="text" class="form-control mb-3" placeholder="VD: 123456" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <p class="font-weight-bold float-left mb-2">Full Name</p>
                    <input type="text" class="form-control mb-3" placeholder="VD: Lương Tuấn Phương" onChange={(e) => {
                        setFullName(e.target.value)
                    }} />
                    <button type="button" class="btn btn-secondary mr-3" onClick={openLogin}>ĐĂNG NHẬP</button>
                    <button type="button" class="btn btn-info" onClick={() => {
                        regester_account({ userName, password, fullName })
                    }}>ĐĂNG KÍ</button>
                </div>
            </div>
        </div>
    )
}
export default LoginComponent;