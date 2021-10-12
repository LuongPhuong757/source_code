import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import Header from './Header';
import * as handleStorage from '../../handleLocalStorage'
function Cart(props) {
    const { listProduct, delete_cart, update_cart } = props
    const user = handleStorage.getLocalStorage('user')
    let renderProduct = []
    if (listProduct) {
        renderProduct = listProduct.map((product, index) => {
            console.log(product.id_product, 'pro')
            return (
                <tr class="table_tr">
                    <th>{index + 1}</th>
                    <td>
                        <Link to={`/product_item/${product.id_product.slug}`} style={{ color: 'black', textDecoration: 'none' }}>
                            {product.id_product.nameProduct}
                            <img src={product.id_product.image} class="img-thumbnail ml-3" alt="anh" style={{ width: "75px", height: "75px" }} />
                        </Link>
                    </td>
                    <td>{product.id_product.price}</td>
                    <td>
                        <button type="button" class="btn btn-light mr-1"
                            onClick={() => {
                                update_cart({ id_cart: product._id, type: 0, id: user.account._id })
                            }}
                        ><i class="fas fa-minus "></i></button>
                        {product.quantily}
                        <button type="button" class="btn btn-light ml-1"
                            onClick={() => {
                                update_cart({ id_cart: product._id, type: 1, id: user.account._id })
                            }}
                        ><i class="fas fa-plus"></i></button>
                    </td>
                    <td>{parseInt(product.quantily) * parseInt(product.id_product.price)}</td>
                    <td>
                        <button type="button" class="btn mr-1 button"
                            onClick={() => {
                                delete_cart({ id_cart: product._id, id: user.account._id })
                            }}
                        >DELETE</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <div class="container my-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <table class="table">
                                <thead class="" style={{ backgroundColor: 'rgb(53, 53, 53)', color: 'white' }}>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Sum</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderProduct}
                                </tbody>
                            </table>
                            <div>
                                <button type="button" class="btn mr-3 button" >Secondary</button>
                                <button type="button" class="btn button">Seco ndary</button>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <table class="table" >
                                <thead class="" style={{ backgroundColor: 'rgb(53, 53, 53)', color: 'white' }}>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col" style={{ textAlign: 'right' }}>Tổng số tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td style={{ textAlign: 'right' }}>Mark</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td style={{ textAlign: 'right' }}>Jacob</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td style={{ textAlign: 'right' }}>Larry</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" class="btn btn-secondary d-block button">Secondary</button>
                            <div class="py-2">
                                <p class="py-2" style={{ borderBottom: '2px solid #ccc' }}><i class="fas fa-tag mr-3"></i>Phiếu ưu đãi</p>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Phiếu ưu đãi" />
                                    <button type="button" name="" id="" class="btn btn-secondary mt-2 btn-block button">ÁP DỤNG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;