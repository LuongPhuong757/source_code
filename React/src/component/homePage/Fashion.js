import React from 'react';
import {
  Link
} from "react-router-dom";
function Fashion(props) {
  let dataTrend = [
    {
      title: 'Cổ Điển',
      image: 'fashion/fashion.jfif',
      link: '/product-male'
    },
    {
      title: 'Smart Watch',
      image: 'fashion/fashion2.jfif',
      link: '/product-female'
    }
  ]
  let listTrend = dataTrend.map((trend, index) => {
    return (
      <div style={{ flexBasis: "50%", height: '250px' }} class="trend" key={index}>
        <div class={`${index === 0 ? 'mr-3' : ''} position-relative trend-in`}>
          <div class="position-absolute py-3" style={{
            display: 'flex',
            width: '60%',
            flexDirection: 'column',
            height: '100%',
            justifyContent: `${index === 0 ? 'flex-start' : 'flex-end'}`
          }} >
            <h1 class="p-0 m-0">{trend.title}</h1>
            <p style={{ fontSize: '20px' }}>Đa dạng về phong cách, màu sắc,kiểu dáng, kích cỡ</p>
          </div>
          <Link to={trend.link}><img src={trend.image}  alt="anh" style={{ width: '100%', display: 'block', height: '100%', transition: 'all 1s' }} /></Link>
        </div>
      </div >
    )
  })
  return (
    <div class="container mt-5" style={{ display: 'flex', width: '100%' }}>
      {listTrend}
    </div>
  );
}

export default Fashion;