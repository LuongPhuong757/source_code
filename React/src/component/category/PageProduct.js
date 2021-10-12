import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import Header from './Header';
import * as handleStorage from '../../handleLocalStorage'
function PageProduct(props) {
    const user = handleStorage.getLocalStorage('user')
    let listProduct = []
    const {add_cart} = props
    listProduct = props.listProduct.map((product, index) => {
        return (
            <div class="col-lg-3">
                <div class="card text-center p-0 product-item">
                    <div class="card-body p-0 m-0">
                        <Link to={`/product-item/${product.slug}`}><img src={product.image} alt="anh" /></Link>
                    </div>
                    <div class="card-footer text-muted m-0 py-3 pb-4">
                        <h6 class="card-title font-weight-bold"><Link to={`/product-item/${product.slug}`}>{product.nameProduct}</Link></h6>
                        <p class="card-text" >{product.price}</p>
                        <button type="button" class="btn"
                            onClick={() => {
                                add_cart({ id_product: product._id, id_cart: user.account.id_cart, id: user.account._id })
                            }}
                        >Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div class="col-lg-9">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
            }} >
                <p class="m-0 p-0 pr-3" style={{
                    color: 'rgb(138 132 132)',
                    fontWeight: '600'
                }}>Hiện thị 1 kết quả duy nhất</p>
                <select style={{
                    padding: '10px',
                    border: 'none',
                    boxShadow: '1px 1px 3px rgb(179 177 177)',
                    outline: 'none'
                }}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="pt-3">
                <div class="row">
                    {listProduct}
                </div>
            </div>
        </div>
    );
}

export default PageProduct;