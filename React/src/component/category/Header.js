import React from 'react';
import {
    Link
} from "react-router-dom";
import * as handleStorage from '../../handleLocalStorage'
import { connect } from 'react-redux';
function Header(props) {
    const user = handleStorage.getLocalStorage('user');
    console.log(user, '.................')
    let lengthList = props.listProduct ? props.listProduct.length : 0
    return (
        <div>
            <div class="container-fluid p-0" style={{ backgroundColor: "#353535" }}>
                <nav class="navbar navbar-expand-lg navbar-light container p-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="/"><i class="fas fa-map-marker-alt mr-2"></i>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/"><i class="fas fa-phone-alt mr-2"></i>0976 922 0162</a>
                            </li>
                        </ul>
                        <div class="form-inline my-2 my-lg-0">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link px-1 text-white" href="/"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-1 text-white" href="/"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-1 text-white" href="/"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown show">
                                        <a class=" dropdown-toggle nav-link text-white" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {user ? user.account.userName : 'Account'}
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item" href="/">Action</a>
                                            {user ?
                                                user.account.role === 'Admin' ? <Link class="dropdown-item" to="/admin">Admin Page</Link> : <></>
                                                : <></>
                                            }
                                            <a class="dropdown-item" href="/" onClick={() => {
                                                handleStorage.removeLocalStorage('user')
                                            }}>Đăng Xuất</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="container-fluid  p-0" style={{ backgroundColor: "#353535", border: "1px solid rgb(79 79 79)" }}>
                <nav class="navbar navbar-expand-lg navbar-light container p-0 py-2">
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                        <Link class="navbar-brand" to="/">
                            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" alt="anh" style={{ width: "200px" }} />
                        </Link>
                        <div class="navbar-nav mx-auto mt-2 mt-lg-0 flex-grow-1">
                            <div class="input-group" style={{ maxWidth: "60%", margin: "auto" }}>
                                <input type="text" class="form-control" placeholder="Tìm kiếm" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline px-4 text-white" style={{ backgroundColor: "#c89979" }} type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div lass="my-2 my-lg-0">
                            <ul class="navbar-nav" style={{ alignItems: "center" }}>
                                <li class="nav-item">
                                    <a class="nav-link px-2 h3 text-white mb-0" href="/"><i class="fas fa-heart"></i></a>
                                </li>
                                <li class="nav-item cart_icon">
                                    <Link class="nav-link px-2 h3 text-white mb-0" to="/cart">
                                        <div class="rounded-circle icon_total">{lengthList}</div>
                                        <i class="fas fa-shopping-cart"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="container-fluid py-2" style={{ backgroundColor: "#353535" }}>
                <nav class="navbar navbar-expand-lg navbar-light container p-0">
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                        <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                            <li class="nav-item  ">
                                <Link class="nav-link  mx-4 h6 text-white activeMenu px-0" to="/">Trang chủ</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-4 h6 text-white px-0" to="">Giới Thiệu</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-4 h6 text-white px-0" to="/product/male">Đồng hồ nam</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-4 h6 text-white px-0" to="/product/female">Đồng hồ nữ</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-4 h6 text-white px-0" to="/">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-4 h6 text-white px-0" to="/">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
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
export default connect(mapStateToProps)(Header)