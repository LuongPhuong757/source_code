import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div>
            <div class="container p-0 py-5" style={{
                borderTop: '1px solid'
            }}>
                <nav class="navbar navbar-expand-lg m-0 p-0">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <h3 style={{ fontWeight: 'bold' }}>Đăng kí để nhận thông tin</h3>
                        </div>
                        <div class="form-inline my-2 my-lg-0" style={{ flexGrow: '1' }}>
                            <div class="input-group ml-auto" style={{ width: '60%' }}>
                                <input type="text" class="form-control" placeholder="Tìm kiếm" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline px-4 text-white" style={{ backgroundColor: "#c89979" }} type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div style={{ backgroundColor: "#353535" }}>
                <div class="container p-0 py-5 text-light footer">
                    <div class="row pb-5">
                        <div class="col-lg-3">
                            <h5>THÔNG TIN LIÊN HỆ</h5>
                            <ul>
                                <li><Link to="/"><i class="fas fa-map-marker-alt mr-2"></i>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</Link></li>
                                <li><Link to="/"><i class="fas fa-phone-alt  mr-2"></i>076 922 0162</Link></li>
                                <li><Link to="/"><i class="fas fa-envelope-open-text  mr-2"></i>demonhunterg@gmail.com</Link></li>
                                <li><Link to="/">mon@mona.media</Link></li>
                                <li><Link to="/"><i class="fab fa-skype  mr-2"></i>demonhunterp</Link></li>
                                <li class="icon mt-3">
                                    <i class="fab fa-facebook-f bg-primary"></i>
                                    <i class="fab fa-instagram bg-danger"></i>
                                    <i class="fab fa-twitter bg-info"></i>
                                    <i class="fab fa-linkedin-in bg-primary"></i>
                                    <i class="fas fa-wifi bg-warning"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h5>LIÊN KẾT</h5>
                            <ul>
                                <li><Link to='/'>Trang chủ</Link></li>
                                <li><Link to="/">Giới thiệu</Link></li>
                                <li><Link to='/product-male'>Đồng hồ nam</Link></li>
                                <li><Link to='/product-female'>Đồng hồ nữ</Link></li>
                                <li><Link to="/">Blogs</Link></li>
                                <li><Link to="/">Liên hệ</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h5>HỖ TRỢ</h5>
                            <ul>
                                <li><Link to="/">Hướng dẫn mua hàng</Link></li>
                                <li><Link to="/">Hướng dẫn thanh toán</Link></li>
                                <li><Link to="/">Chính sách bảo hành</Link></li>
                                <li><Link to="/">Chính sách đổi trả</Link></li>
                                <li><Link to="/">Tư vấn khách hàng</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h5>TẢI ỨNG DỤNG TRÊN</h5>
                            <ul>
                                <li><Link to="/">Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay</Link></li>
                                <li><Link to="/"><img src="icon/icon1.jpg" alt="anh"/></Link></li>
                                <li><Link to="/"><img src="icon/icon2.jpg" alt="anh"/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <nav class="navbar m-0 pt-5 " style={{
                        borderTop: '1px solid #ccc'
                    }}>
                        <div class="container-fluid p-0 m-0">
                            <Link to="/" class="navbar-brand" style={{
                                color: 'white',
                                fontSize: '16px'
                            }}>Bản quyền thuộc về Lương Tuấn Phương</Link>
                            <div class="d-flex">
                                <img src="icon/icon3.png"  alt="anh"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Footer;