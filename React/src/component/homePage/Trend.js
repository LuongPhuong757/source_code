import React from 'react';
import {
    Link
} from "react-router-dom";
function Trend(props) {
    let dataTrend = [
        {
            title: 'Đồng Hồ Nam',
            image: 'trend/trend.jfif',
            link: '/product-male'
        },
        {
            title: 'Đồng Hồ Nữ',
            image: 'trend/trend2.jfif',
            link: '/product-female'
        }
    ]
    let listTrend = dataTrend.map((trend, index) => {
        return (
            <div style={{ flexBasis: "50%", height: '250px' }} class="trend" key={index}>
                <div class="mr-3 position-relative trend-in">
                    <div class="position-absolute" >
                        <h3 class="p-0 m-0">Xu hướng 2019</h3>
                        <span></span>
                        <h1 class="p-0 m-0">{trend.title}</h1>
                    </div>
                    <Link to={trend.link}><img src={trend.image}  alt="anh" style={{ width: '100%', display: 'block', height: '100%', transition: 'all 1s' }} /></Link>
                </div>
            </div>
        )
    })
    return (
        <div class="container mt-5" style={{ display: 'flex', width: '100%' }}>
            {listTrend}
        </div>
    );
}

export default Trend;