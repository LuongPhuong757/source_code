import React from 'react';

function TopProduct(props) {
    let listProduct = []
    let dataList = [
        {
            title: 'Special title treatment',
            price: '10000000000',
            image: 'product.jpg'
        },
        {
            title: 'Special title treatment',
            price: '10000000000',
            image: 'product.jpg'
        },
        {
            title: 'Special title treatment',
            price: '10000000000',
            image: 'product.jpg'
        },
        {
            title: 'Special title treatment',
            price: '10000000000',
            image: 'product.jpg'
        }
    ]
    listProduct = dataList.map((product, index) => {
        return (
            <div class="col-lg-3" key={index}>
                <div class="card text-center p-0 product-item">
                    <div class="card-body p-0 m-0">
                        <img src={product.image}  alt="anh"/>
                    </div>
                    <div class="card-footer text-muted m-0 py-3 pb-4">
                        <h6 class="card-title font-weight-bold">{product.title}</h6>
                        <p class="card-text" >{product.price}</p>
                        <button type="button" class="btn" >Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div class="container mt-5">
            <div>
                <h3 class="mb-4" style={{
                    fontWeight: 'bold'
                }}>Sản phẩm bán chạy</h3>
            </div>
            <div>
                <div class="row">
                    {listProduct}
                </div>
            </div>
        </div>
    );
}

export default TopProduct;