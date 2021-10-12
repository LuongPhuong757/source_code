import React from 'react';
import * as handleStorage from '../../handleLocalStorage'
function SingleProduct(props) {
    const { singleProduct, add_cart } = props
    const user = handleStorage.getLocalStorage('user')
    return (
        <div class="container">
            <div class="row my-5" style={{ alignItems: 'center' }}>
                <div class="col-lg-6">
                    <img src={singleProduct.image} style={{ display: 'block', width: "100%" }} alt="anh" />
                </div>
                <div class="col-lg-6">
                    <h4 class="m-0 mb-3">Trang chủ / <span style={{ color: '#c89979' }}>Popular</span></h4>
                    <h2 class="mb-0 m-0" style={{ display: 'inline-block' }}>{singleProduct.nameProduct}
                        <span class="m-0 my-3" style={{ height: '2px', width: '100%', backgroundColor: "#ccc", display: 'block' }}></span>
                    </h2>
                    <h3 style={{ color: '#c89979' }}>{singleProduct.price}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
                        Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                    <ul>
                        <li class="d-block py-1">Sku: P006</li>
                        <li class="d-block py-1">Categories: Butter & Eggs, Cultured Butter</li>
                        <li class="d-block py-1">Tag: {singleProduct.tag}</li>
                    </ul>
                    <div class="d-block py-3">
                        <button type="button" class="btn btn-light mr-1 button"><i class="fas fa-minus "></i></button>
                        <span class="mx-1">1</span>
                        <button type="button" class="btn btn-light ml-1 button"><i class="fas fa-plus"></i></button>
                    </div>
                    <button type="button" class="btn mt-3 d-block button "
                        style={{ backgroundColor: "#c89979", color: 'white', borderRadius: '0px' }}
                        onClick={() => {
                            add_cart({ id_product: singleProduct._id, id_cart: user.account.id_cart,id : user.account._id })
                        }}
                    >
                        Them vào giỏ hàng
                    </button>
                </div>
            </div>

            <div class="py-3 my-5" style={{ borderWidth: '1px 0px', borderStyle: "solid", borderColor: '#e3e0e0' }}>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="/" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="/" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="/" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p class="mb-0 mt-3" style={{ lineHeight: '1.5', fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
                            Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;