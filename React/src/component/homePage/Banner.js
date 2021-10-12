import React from 'react';

function Banner(props) {
    let listBanner = [];
    let styleBanner = {
        width: '50%',
        height: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    let styleTitle = {
        fontSize: '50px',
        fontWeight: 'bold'
    }

    let styleButton = {
        color: 'white',
        border: '3px solid white',
        width: '40%'
    }
    const dataBanner = [
        {
            title: 'Đồng hồ Classio',
            describe: 'Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet,Audemars Piguet sản xuất ra 36.000 chiếc đồng hồ mỗi năm...',
            image: '/banner/banner.jfif'
        },
        {
            title: 'Apple Watch',
            describe: 'Thương hiệu nổi tiếng của thế giới được sản xuất bởi Apple. Thiết kế sang trọng trẻ trung phù hợp với mọi lứa tuổi',
            image: '/banner/banner2.jfif'
        }
    ]
    listBanner = dataBanner.map((data, index) => {
        return (

            <div class={`carousel-item position-relative ${index === 0 ? 'active' : ''}`} key={index}>
                <div class="position-absolute container" style={{ width: '100%', height: '100%', left: '50%', transform: 'translate(-50%)', zIndex: '1' }}>
                    <div style={styleBanner}>
                        <h4>Mone Watch</h4>
                        <h1 class="py-2" style={styleTitle}>{data.title}</h1>
                        <p>{data.describe}</p>
                        <button type="button" name="" id="" class="btn btn-lg mt-3 px-0 button-banner" style={styleButton}>Xem sản phẩm</button>
                    </div>
                </div>
                <img class="d-block w-100" src={data.image} alt="First slide" />
            </div>
        )
    })
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                {listBanner}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Banner;