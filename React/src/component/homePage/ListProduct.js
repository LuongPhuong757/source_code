import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as handleStorage from '../../handleLocalStorage'
function ListProduct(props) {
    const user = handleStorage.getLocalStorage('user')
    const {add_cart} = props
    let listProduct = []
    if (props.listProduct) {
        listProduct = props.listProduct.map((product, index) => {
            return (
                <div class="col-lg-3" key={index}>
                    <div class="card text-center p-0 product-item">
                        <div class="card-body p-0 m-0">
                            <Link to={`/product-item/${product.slug}`}>
                                <img src={product.image} alt="anh" />
                            </ Link >
                        </div>
                        <div class="card-footer text-muted m-0 py-3 pb-4">
                            <h6 class="card-title font-weight-bold">
                                <Link to={`/product-item/${product.slug}`} class="card-title">
                                    {product.nameProduct}
                                </Link>
                            </h6>
                            <p class="card-text" >{product.price}</p>
                            <button type="button" class="btn"
                                onClick={() => {
                                    add_cart({ id_product: product._id, id_cart: user.account.id_cart, id: user.account._id })
                                }}>
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div class="container mt-5">
            <div>
                <h3>Sản phẩm bán chạy</h3>
            </div>
            <div>
                <div class="row">
                    {listProduct}
                </div>
            </div>
        </div>

    );
}

export default ListProduct;